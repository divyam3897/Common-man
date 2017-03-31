from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie

@csrf_exempt
@ensure_csrf_cookie
def register(request):
    print("Hello")
    # bodyUnicode = request.body.decode('utf-8')
    # data = json.loads(bodyUnicode)
    data = request.POST.get('email')
    print(request.POST)
    return JsonResponse( {
        'name':"Divyam",
        })
