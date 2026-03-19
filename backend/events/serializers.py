from rest_framework import serializers
from events.models import Event
from users.serializers import UserSerializer


class EventSerializer(serializers.ModelSerializer):
    #user = serializers.ReadOnlyField(source='user.username') 
    user = UserSerializer(source='user.username', read_only = True)
    class Meta:
        model = Event
        fields = '__all__'