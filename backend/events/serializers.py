from rest_framework import serializers
from events.models import Event


class EventSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username') 

    class Meta:
        model = Event
        fields = '__all__'