from rest_framework.serializers import ModelSerializer
from .models import Jarmu
from .models import JarmuKategoria
from .models import Foglalas
from .models import Marka

class JarmuSerializer(ModelSerializer):
    class Meta:
        model = Jarmu
        fields = ['id','rendszam','marka_id','tipus','szin','km_ora_allas','evjarat','muszaki_erv_datum','jarmu_kategoria_id','leiras','kep']

class JarmuKategoriaSerializer(ModelSerializer):
    class Meta:
        model = JarmuKategoria
        fields = ['id','nev']

class FoglalasSerializer(ModelSerializer):
    class Meta:
        model = Foglalas
        fields = ['id','felhasznalo_id','jarmu_id','foglalas_kezdete','foglalas_vege']

class MarkaSerializer(ModelSerializer):
    class Meta:
        model = Marka
        fields = ['id','nev']