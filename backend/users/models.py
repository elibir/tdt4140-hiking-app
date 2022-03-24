from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
    is_privateUser = models.BooleanField(default=False)
    is_companyUser = models.BooleanField(default=False)

    first_name = models.CharField(max_length = 30, null=True, blank=True)
    last_name = models.CharField(max_length = 30, null=True, blank=True)
    company_name = models.CharField(max_length=100, null=True, blank=True)
    hometown = models.CharField(max_length= 30, null=True, blank=True)
    birthday = models.DateField(max_length= 30, null=True, blank=True)
    address = models.CharField(max_length=60, null=True, blank=True)
    tlf_no = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.username