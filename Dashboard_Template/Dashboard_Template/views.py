from django.http import HttpResponse
from django.shortcuts import render

def home (request):
    return render(request,'base.html')

def userSignup (request):
    return render(request,'auth/signup.html')

def userLogin (request):
    return render(request,'auth/login.html')

