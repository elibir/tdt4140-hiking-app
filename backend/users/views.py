from django.contrib.auth.models import User
from events.serializers import EventSerializer
from events.models import Event
from rest_framework.response import Response
from rest_framework import generics, permissions
from knox.models import AuthToken

from .serializers import UserSerializer, LoginSerializer, RegisterSerializer

class RegisterAPIView(generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            "success": True
        })

class UserAPIView(generics.RetrieveAPIView):
    """
    Returns a user object if the user is logged in.
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

class RegisterAPIView(generics.GenericAPIView):
    """
    Returns a user object and its login token if registration is successfull.
    """
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            "success": True
        })

class UserEventsAPIView(generics.RetrieveAPIView):
    """
    Returns a list of Events a users is a participants in.
    """
   
    serializer_class = UserSerializer
    queryset = Event.objects.all()
    def get(self, request, pk, format=None):
        events = []
        for e in self.get_queryset():
            if e.isParticipaintIn(pk):
                events.append(e)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
class UserCreatedEventsAPIView(generics.RetrieveAPIView):
    """
    Returns a list of Events a users have created.
    """
    serializer_class = UserSerializer
    queryset = Event.objects.all()
    def get(self, request, pk, format=None):
        events = []
        for e in self.get_queryset():
            print(e.created_by.id)
            if e.created_by.id == pk:
                events.append(e)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

class LoginAPIView(generics.GenericAPIView):
    """
    Returns a user object and its login token if login is successfull.
    """
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            "success": True
        })
