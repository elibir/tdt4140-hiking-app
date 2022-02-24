from django.db import models
from django.utils.timezone import now

# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    location = models.CharField(max_length=30)
    date_time = models.DateField(null=True, blank=True)
    difficulty = models.PositiveSmallIntegerField(choices=((1, "Lett"), (2, "Moderat"), (3, "Vanskelig")))
    created_at = models.DateTimeField(default=now, editable=False, null=True)
    user = models.ForeignKey('auth.User', related_name="events", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


    

