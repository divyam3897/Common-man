from django.shortcuts import render
from .models import *
from rest_framework.decorators import api_view
from .serializers import *
from rest_framework.response import Response
from django.http import HttpResponse

@api_view(['GET'])
def categoriesDetails(request):
    item = Menu.objects.all()
    serializers = MenuSerializer(item,many=True)
    print("DATA:")
    print( serializers.data)
    return Response(serializers.data)

@api_view(['GET'])
def itemDetails(request):
    item = categoryItem.objects.all()
    serializers = categoryItemsSerializer(item,many=True)
    print("DATA:")
    print( serializers.data)
    #return HttpResponse(serializers.data)
    return Response(serializers.data)  
