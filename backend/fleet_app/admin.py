from django.contrib import admin
from .models import Jarmu
from .models import JarmuKategoria
from .models import Felhasznalo
from .models import JogosultsagiSzint
from .models import Foglalas

# Register your models here.
admin.site.register(Jarmu)
admin.site.register(JarmuKategoria)
admin.site.register(Felhasznalo)
admin.site.register(JogosultsagiSzint)
admin.site.register(Foglalas)