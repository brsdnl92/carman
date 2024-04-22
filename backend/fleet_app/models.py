from django.db import models

# Create your models here.
class JarmuKategoria(models.Model):
    id = models.IntegerField(primary_key = True)
    nev = models.CharField(max_length = 100)
    
    def __str__(self):
        return self.nev

class Marka(models.Model):
    id = models.IntegerField(primary_key = True)
    nev = models.CharField(max_length = 100)

class Jarmu(models.Model):
    id = models.IntegerField(primary_key = True)
    rendszam = models.CharField(max_length = 7)
    marka_id = models.ForeignKey(Marka, on_delete=models.CASCADE)
    tipus = models.CharField(max_length = 50)
    szin = models.CharField(max_length = 50)
    km_ora_allas = models.IntegerField()
    evjarat = models.DateField()
    muszaki_erv_datum = models.DateField()
    jarmu_kategoria_id = models.ForeignKey(JarmuKategoria, on_delete=models.CASCADE)
    leiras = models.CharField(max_length = 500)
    kep = models.ImageField(upload_to ='static/images/')

    def __str__(self):
        return f"{self.marka} - {self.tipus}"

class JogosultsagiSzint(models.Model):
    id = models.IntegerField(primary_key = True)
    nev = models.CharField(max_length = 100)

    def __str__(self):
        return self.nev

class Felhasznalo(models.Model):
    id = models.IntegerField(primary_key = True)
    nev = models.CharField(max_length = 100)
    szem_ig_szam = models.CharField(max_length = 8)
    vez_eng_szam = models.CharField(max_length = 9)
    jog_szint_id = models.ForeignKey(JogosultsagiSzint, on_delete=models.CASCADE)
    reg_datum = models.DateField()

    def __str__(self):
        return self.nev

class Foglalas(models.Model):
    id = models.IntegerField(primary_key = True)
    felhasznalo_id = models.ForeignKey(Felhasznalo, on_delete=models.CASCADE)
    jarmu_id = models.ForeignKey(Jarmu, on_delete=models.CASCADE)
    foglalas_kezdete = models.DateTimeField()
    foglalas_vege = models.DateTimeField()




    
