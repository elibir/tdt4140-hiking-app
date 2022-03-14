from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = models.CharField(max_length = 50, unique = True)
    email = models.EmailField(unique = True)
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    hometown = models.CharField(max_length= 30)
    birthday = models.DateField(null=True)

    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']
    
    def __str__(self):
        return "{}".format(self.username)

