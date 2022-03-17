from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
    is_privateUser = models.BooleanField(default=False)
    is_companyUser = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class PrivateUser(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    first_name = models.CharField(max_length = 30, null=True, blank=True)
    last_name = models.CharField(max_length = 30, null=True, blank=True)
    hometown = models.CharField(max_length= 30, null=True, blank=True)
    birthday = models.DateField(max_length= 30, null=True, blank=True)

    def __str__(self):
        return self.user.username

class CompanyUser(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    company_name = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=60, null=True, blank=True)
    tlf_no = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.user.username