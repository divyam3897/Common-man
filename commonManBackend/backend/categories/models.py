from django.db import models

class Menu(models.Model):
    image = models.CharField(max_length=500)
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name

class categoryItem(models.Model):
    itemName = models.CharField(max_length=250)
    image = models.CharField(max_length=250)
    quantity = models.CharField(max_length=250)
    price = models.IntegerField()
    category = models.ManyToManyField(Menu)

    def __str__(self):
        return self.itemName
