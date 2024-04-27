"""
URL configuration for fleet_manager project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from fleet_app import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('basic/', views.basic),
    path('carman/', views.carman),
    path('cars/', views.cars),
    path('comfort/', views.comfort),
    path('contact/', views.contact),
    path('foglalas/', views.foglalas),
    path('premium/', views.premium),
    path('onecar/', views.onecar),
    path('statisztika/', views.statisztika),
    path('login/', views.login_page, name='login_page'),
    path('logout/', views.logout_page, name='logout_page'),
    path('register/', views.register_page, name='register_page'),
    path('api/jarmuvek',views.jarmu_handler),
    path('api/jarmukategoria',views.jarmu_kategoria_handler),
    path('api/foglalasok',views.foglalas_handler),
    path('api/markak',views.marka_handler),
    path('api/jarmubykategoria/<int:cat_id>', views.jarmu_handler_by_category),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
