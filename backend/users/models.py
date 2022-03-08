from django.db import models
from django.contrib.auth.models import User
from django.db.models.base import Model
from django.db.models.deletion import CASCADE
from events.models import Event
# Create your models here.
class ExtendedUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    events_created = models.OneToManyField( #one-to-many relation, one user can created several events
        Event, 
        through='Creator',
        through_fields=('event', 'user'),
        )
    
    def __str__(self):
        return self.user.username;


#model to connect User with Event
class Creator:
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(ExtendedUser, on_delete=models.CASCADE)

    






