from rest_framework import serializers
from .models import *
from users.models import *
from django.contrib.auth.models import User

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

class userSerializer(serializers.ModelSerializer):
    class  Meta:
        model = User
        fields = ("first_name","username")

class subscribedItemsSerializer(serializers.ModelSerializer):
    item = categoryItemsSerializer()
    user = userSerializer()
    class Meta:
        model = subscribedItems
        fields = ('item','user','time')
