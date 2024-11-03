from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # APP URLS 
    path('', views.home, name='home'),
    path('signup/', views.userSignup, name='userSignup'),
    path('login/', views.userLogin, name='userLogin'),

]
