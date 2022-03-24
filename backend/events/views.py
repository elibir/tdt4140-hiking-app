from urllib.request import Request
from events.models import Event
from events.serializers import EventSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
#from users.permissions import IsOwnerOrReadOnly


class EventList(APIView):
    """
    List all events, or create a new event.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Event.objects.all()
    
    def get(self, request, format=None):
        events = Event.objects.all()
        print(request.data)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = EventSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            event = Event()
            event.user = request.user
            serializer.save()
            event.save(request=request)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class EventUserJoin(APIView):
    
    permission_classes = [permissions.IsAuthenticated]
    queryset = Event.objects.all()
    def post(self, request, pk, format=None):
        user = request.user
        for e in Event.objects.all():
            if pk == e.id:
                if user not in e.participants:
                    e.participants.append(user)
                    return Response(status=status.HTTP_201_CREATED) 
            
        return Response(status=status.HTTP_400_BAD_REQUEST)

class EventDetail(APIView):
    """
    Retrieve, update or delete an event instance.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            raise Http404


    def get(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        event = self.get_object(pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



