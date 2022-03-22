from rest_framework.response import Response
from rest_framework import generics, permissions
from knox.models import AuthToken
from .models import User, CompanyUser, PrivateUser
from .serializers import UserSerializer, LoginSerializer, PrivateUserRegisterSerializer, CompanyRegisterSerializer, PrivateUserSerializer, CompanyUserSerializer

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

class CompanyRegisterAPIView(generics.GenericAPIView):
    serializer_class = CompanyRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            "success": True
        })

class PrivateUserRegisterAPIView(generics.GenericAPIView):
    serializer_class = PrivateUserRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            "success": True
        })

class UpdatePrivateUserAPIView(generics.UpdateAPIView):
    queryset = PrivateUser.objects.all()
    serializer_class = PrivateUserSerializer;
    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Updated successfully"})

        else:
            return Response({"message": "failed", "details": serializer.errors})

class UpdateCompanyUserAPIView(generics.UpdateAPIView):
    queryset = CompanyUser.objects.all()
    serializer_class = CompanyUserSerializer;
    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "updated successfully"
                })
        else:
            return Response({"message": "failed", "details": serializer.errors})


class LoginAPIView(generics.GenericAPIView):
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