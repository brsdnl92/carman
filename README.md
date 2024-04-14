**Project működésre bírása**:

A parancsokat Parancssorban kell kiadni! (A PowerShell-ben le van tiltva a scriptek futtatása!)

**Carman mappa létrehozása tetszőleges helyen**
mkdir carman

**Belépés a carman mappába**
cd carman

**Python virtuális környezet (venv) létrehozása a carman mappában**
python -m venv env

**Belépés a virtuális környezet mappájába**
cd env

**Virtuális környezet aktiválása (ha megjelenik a (env) a konzolon akkor működött)**
Scripts\activate

**Visszalépés a carman mappába az env mappából**
cd ..

**Projekt repository klónozása a lokális repositoryba**
git clone https://github.com/brsdnl92/carman.git

**Belépés a belső carman mappába**
cd carman

**Belépés a backend mappába**
cd backend

**Python csomag követelmények telepítése**
pip install -r requirements.txt

**Backend localhost szerver futtatása (http://127.0.0.1:8000/)**
python manage.py runserver
