from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, PrivateUser, CompanyUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'is_privateUser', 'is_companyUser']


class PrivateUserRegisterSerializer(serializers.ModelSerializer): 
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

class CompanyRegisterSerializer(serializers.ModelSerializer): 
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


class PrivateUserSerializer(serializers.Serializer):
    class Meta:
        model = PrivateUser
        fields = ['user', 'first_name', 'last_name', 'hometown', 'birthday']

#    def update(self, instance, validated_data):
#        instance.first_name = validated_data.get('first_name', instance.first_name)
#        instance.last_name = validated_data.get('last_name', instance.last_name)
#        instance.hometown = validated_data.get('hometown', instance.hometown)
#        instance.birthday = validated_data.get('birthday', instance.birthday)
#        instance.save()
#        return instance

class CompanyUserSerializer(serializers.Serializer):
    class Meta:
        model = CompanyUser
        fields = ['user', 'company_name', 'address', 'tlf_no']
        
#    def update(self, instance, validated_data):
#        instance.company_name = validated_data.get('company_name', instance.company_name)
#        instance.address = validated_data.get('address', instance.address)
#        instance.tlf_no = validated_data.get('tlf_no', instance.tlf_no)
#        instance.save()
#        return instance