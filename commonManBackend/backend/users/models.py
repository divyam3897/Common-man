from django.db import models
from django.contrib.auth.models import User

class UserDetails(models.Model):
	name = models.OneToOneField(User, related_name='user')
	userName = models.CharField(max_length=20)
	password = models.CharField(max_length=20)
	email = models.EmailField(max_length=20)
	contact = models.IntegerField()
	address = models.CharField(max_length=100)

	def __str__(self):
            return self.userName
