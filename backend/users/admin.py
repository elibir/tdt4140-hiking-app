from django.contrib import admin
from .models import User, CompanyUser, PrivateUser
from django.contrib.auth.models import Group

# Register your models here.
admin.site.register(User)
admin.site.register(CompanyUser)
admin.site.register(PrivateUser)
admin.site.unregister(Group)