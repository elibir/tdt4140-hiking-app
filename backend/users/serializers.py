from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, PrivateUser, CompanyUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'is_privateUser', 'is_companyUser']


class PrivateUserSerializer(serializers.ModelSerializer): 
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}
    
    def save(self, **kwargs):
        user = User (
            username = self.validated_data['username'],
            email = self.validated_data['email']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({"Error": "Passords do not match"})
        user.set_password(password)
        user.is_privateUser = True
        user.save()
        PrivateUser.objects.create(user=user)
        return user

class CompanySerializer(serializers.ModelSerializer): 
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}
    
    def save(self, **kwargs):
        user = User (
            username = self.validated_data['username'],
            email = self.validated_data['email']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({"Error": "Passords do not match"})
        user.set_password(password)

        user.is_companyUser = True
        user.save()
        CompanyUser.objects.create(user=user)
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    @staticmethod
    def validate(data):
        """
        Checks if username and password combo is valid.
        """
        user = authenticate(**data)
        return user
