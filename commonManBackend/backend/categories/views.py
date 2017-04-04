from django.shortcuts import render
from .models import *
from rest_framework.decorators import api_view
from .serializers import *
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from users.models import *

@api_view(['GET'])
def categoriesDetails(request):
    item = Menu.objects.all()
    serializers = MenuSerializer(item,many=True)
    return Response(serializers.data)

@api_view(['GET'])
def itemDetails(request):
    item = categoryItem.objects.all()
    serializers = categoryItemsSerializer(item,many=True)
    return Response(serializers.data)  

@api_view(['GET'])
def cartDetails(request):
    item = cart.objects.all()
    serializers = cartSerializer(item,many=True)
    return JsonResponse(serializers.data,safe=False)  

@api_view(['GET'])
def subscribedItemsDetails(request):
    item = subscribedItems.objects.all()
    serializers = subscribedItemsSerializer(item,many=True)
    return JsonResponse(serializers.data,safe=False)  
