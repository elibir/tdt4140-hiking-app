from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=30)
    date_of_birth = models.DateField('day born')

    def __str__(self):
        return self.name






