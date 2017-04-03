from rest_framework import serializers
from .models import *
from users.models import *

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = "__all__"

class categoryItemsSerializer(serializers.ModelSerializer):
    #menu = MenuSerializer(many=True)
    class Meta:
        model = categoryItem
        fields = "__all__"

class cartSerializer(serializers.ModelSerializer):
    item = categoryItemsSerializer()
    class Meta:
        model = cart
        fields = ('item','user')
