from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.models import User
from django.views.generic import View
from django.contrib.auth import authenticate, login, logout

@csrf_exempt
def register(request):
    print("Hello")
    data = json.loads(request.body.decode('utf-8'))
    print(data)
    name = data['name']
    username = data['userName']
    password = data['password']
    email = data['email']
    number = data['number']
    address = data['address']
    user = User(username=username,email=email,first_name=name)
    user.set_password(password)
    user.save()

@csrf_exempt
def loginView(request):
    print("Hello")
    data = json.loads(request.body.decode('utf-8'))
    print(data)
    username = data['username']
    password = data['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request,user)
            return JsonResponse({"status":"LoggedIn"})
        else:
            print("no user")
    else:
        return JsonResponse({"status":"Invalid details"})
