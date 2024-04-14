**Project működésre bírása**:

A parancsokat Parancssorban kell kiadni! (A PowerShell-ben le van tiltva a scriptek futtatása!)

python -m venv env

cd env

Scripts\activate

ha megjelenik a (env) a konzolon akkor működött

git clone https://github.com/brsdnl92/fleet_manager.git

cd fleet_manager

pip install -r requirements.txt

cd backend

python manage.py runserver
