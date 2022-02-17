from rest_framework import serializers
from events.models import Event


class EventSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=30)
    description = serializers.CharField(max_length=100)
    where = serializers.CharField(max_length=30)
    date_time = serializers.DateField(null=True, blank=True)
    difficulty = serializers.PositiveSmallIntegerField(choices=((1, "Lett"), (2, "Moderat"), (3, "Vanskelig")))
    created_at = serializers.DateTimeField(default=now, editable=False)

    #owner = serializers.ReadOnlyField(source='owner.username') 

    def create(self, validated_data):
        """
        Create and return a new `Event` instance, given the validated data.
        """
        return Snippet.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Event` instance, given the validated data.
        """
        instance.name = validated_data.get('name', instance.title)
        instance.description = validated_data.get('code', instance.code)
        instance.where = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance

    class Meta:
        model = Event
        fields = '__all__'