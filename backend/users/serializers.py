from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'id', 'email', 'userType', 'first_name', 'last_name', 'hometown', 'birthday', 'company_name', 'address', 'tlf_no']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'userType', 'password', 'first_name', 'last_name', 'hometown', 'birthday', 'company_name', 'address', 'tlf_no']
        extra_kwargs = {'password': {'write_only': True}}     

    @staticmethod    
    def create(validated_data):
        """
        Creates a user object based on validated form data.
        """
        if validated_data['userType'] == "private":
            user = User.objects.create_user(
                username = validated_data['username'],
                birthday = validated_data['birthday'],
                userType = validated_data['userType'],
                email = validated_data['email'],
                password = validated_data['password'],
                first_name = validated_data['first_name'],
                last_name = validated_data['last_name'],
                hometown = validated_data['hometown']
            )
            return user
        elif  validated_data['userType'] == "public":
            user = User.objects.create_user(
                username = validated_data['username'],
                userType = validated_data['userType'],
                email = validated_data['email'],
                password = validated_data['password'],
                company_name = validated_data['company_name'],
                hometown = validated_data['hometown'],
                address = validated_data['address'],
                tlf_no = validated_data['tlf_no']
            )
            return user
        return "error"

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