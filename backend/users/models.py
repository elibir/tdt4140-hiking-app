from django.db import models

class User(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    events_created = None;
    events_registrated = None;

# Create your models here.



