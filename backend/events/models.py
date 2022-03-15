from django.db import models
from django.utils.timezone import now
from django.conf import settings

User = settings.AUTH_USER_MODEL 

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=400)
    location = models.CharField(max_length=30)
    date_time = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    difficulty = models.PositiveSmallIntegerField(choices=((1, "Lett"), (2, "Moderat"), (3, "Vanskelig")))
    created_at = models.DateTimeField(default=now, editable=False, null=True)
    #user = models.ForeignKey('users.User', related_name="events", on_delete=models.CASCADE, null=True)
    created_by = models.ForeignKey(User,
                        default = 1,
                        null = True, 
                        on_delete = models.SET_NULL
                        )
    capacity = models.IntegerField(null=True)
    #participants = models.ManyToManyField('auth.User', related_name="events", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    """
    def save(self,**kwargs):
      if ('request') not in kwargs and self.created_by is None:
            request = kwargs.pop('request')
            self.created_by= request.user
      super(Event, self).save(**kwargs)

    
    def save(self):
        if not self.participants.all():
            user = self.user
            self.participants.add(user)
            
        super(Event, self).save(*args, **kwargs)
    """

