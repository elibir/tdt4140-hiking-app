from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import User


# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    location = models.CharField(max_length=30)
    date_time = models.DateField(null=True, blank=True)
    difficulty = models.PositiveSmallIntegerField(choices=((1, "Lett"), (2, "Moderat"), (3, "Vanskelig")))
    created_at = models.DateTimeField(default=now, editable=False, null=True)
    #user = models.ForeignKey('auth.User', related_name="events", on_delete=models.CASCADE, null=True)
    capacity = models.IntegerField(null=True)
    #participants = models.ManyToManyField('auth.User', related_name="events", on_delete=models.CASCADE)

    owner = models.ManyToOneRel(
        User,
        through='Owner',
        through_fields=('event', 'user'),
    )

    participants = models.ManyToManyField(
        User,
        through='Participant',
        through_fields=('event', 'user'),
    )

    def __str__(self):
        return self.name
    
class Owner:
    event = model.models.ForeignKey(Event, on_delete=models.CASCADE)
    user = model.models.ForeignKey(User, on_delete=models.CASCADE) 

class Participator:
    event = model.models.ForeignKey(Event, on_delete=models.CASCADE)
    user = model.models.ForeignKey(User, on_delete=models.CASCADE) 

    #def save(self):
       # if not self.participants.all():
        #    user = self.user
        #    self.participants.add(user)
            
      #  super(Event, self).save(*args, **kwargs)
    

