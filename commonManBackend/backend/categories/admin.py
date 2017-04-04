from django.contrib import admin
from .models import *
from users.models import *

admin.site.register(Menu)
admin.site.register(categoryItem)
admin.site.register(cart)
admin.site.register(subscribedItems)
