from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import Jarmu
from .serializers import JarmuSerializer
from .models import JarmuKategoria
from .serializers import JarmuKategoriaSerializer
from .models import Foglalas
from .serializers import FoglalasSerializer

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