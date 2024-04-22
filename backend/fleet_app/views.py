from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Jarmu
from .serializers import JarmuSerializer
from .models import JarmuKategoria
from .serializers import JarmuKategoriaSerializer
from .models import Foglalas
from .serializers import FoglalasSerializer
from .models import Marka
from .serializers import MarkaSerializer


# Create your views here.
@api_view(['GET', 'POST'])
def jarmu_handler(request):

    if request.method == 'GET': 
        jarmuvek = Jarmu.objects.all()
        serialized = JarmuSerializer(jarmuvek,many=True)
        return Response(serialized.data)

@api_view(['GET'])
def jarmu_kategoria_handler(request):

    if request.method == 'GET':
        jarmu_kategoriak = JarmuKategoria.objects.all()
        serialized = JarmuKategoriaSerializer(jarmu_kategoriak,many=True)
        return Response(serialized.data)

@api_view(['GET'])
def foglalas_handler(request):

    if request.method == 'GET':
        foglalasok = Foglalas.objects.all()
        serialized = FoglalasSerializer(foglalasok, many=True)
        return Response(serialized.data)

@api_view(['GET'])
def marka_handler(request):

    if request.method == 'GET':
        markak = Marka.objects.all()
        serialized = MarkaSerializer(markak, many=True)
        return Response(serialized.data)

@login_required(login_url='login_page')    
def home(request):
    return render(request,'index.html')

def login_page(request):
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST['password']

        user= authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        return render(request, 'login.html', {'error_message': 'Hibás felhasználónév vagy jelszó!'}) 
    return render(request,'login.html')

def logout_page(request):
    logout(request)
    return redirect('home')

def register_page(request):
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST['password']
        password2=request.POST['password2']
        
        if len(username) < 8:
           return render(request,'reg.html', {'error_message': 'Túl rövid felhasználónév!'}) 
        
        if password != password2:
           return render(request,'reg.html', {'error_message': 'A két jelszó nem egyezik meg!'}) 
        
        if User.object.filter(username=username).exist():
            return render(request,'reg.html', {'error_message': 'Van már ilyen felhasználó!'})
        else:
            user=User.objects.create_user(username=username, password=password)
            user.save()
            return redirect('login_page')
    
    return render(request,'reg.html')
    
