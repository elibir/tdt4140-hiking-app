from django.db import models
from django.utils.timezone import now
from django.conf import settings
from django.contrib.auth.models import User

from django.db import models

User = settings.AUTH_USER_MODEL 

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=400)
    location = models.CharField(max_length=30)
    date_time = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    difficulty = models.PositiveSmallIntegerField(choices=((1, "Lett"), (2, "Moderat"), (3, "Vanskelig")))
    created_at = models.DateTimeField(default=now, editable=False, null=True)
    canceled = models.BooleanField(default=False, null=True)
    #user = models.ForeignKey('users.User', related_name="events", on_delete=models.CASCADE, null=True)
    created_by = models.ForeignKey(User,
                        default = 1,
                        null = True, 
                        on_delete = models.SET_NULL,
                        related_name = "creator"
                        )
    #user = models.ForeignKey('auth.User', related_name="events", on_delete=models.CASCADE, null=True)
    capacity = models.IntegerField(null=True)
    participants = models.ManyToManyField(User, related_name = "participants", null=True)
    #participants = models.ManyToManyField(User, related_name = "participants", blank=True)

    def __str__(self):
        return self.name
        
    
    def isParticipaintIn(self, id):
      return self.participants.all().filter(id=id).exists()

    def save(self, *args, **kwargs):
      #request = kwargs.get('request', None)
      #if request:
        #self.created_by = request.user
      super().save(*args, **kwargs)
            
    
class Owner:
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 

class Participant:
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 

    #def save(self):
       # if not self.participants.all():
        #    user = self.user
        #    self.participants.add(user)
            
      #  super(Event, self).save(*args, **kwargs)
    


