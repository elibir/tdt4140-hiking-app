from django.urls import path, include
from knox.views import LogoutView
from .views import PrivateUserRegisterAPIView, CompanyRegisterAPIView, LoginAPIView, RegisterAPIView, UpdatePrivateUserAPIView, UpdateCompanyUserAPIView

urlpatterns = [
    path('', include('knox.urls')),
    path('register/', RegisterAPIView.as_view(), name = 'register'),
    path('register/privateUser/', PrivateUserRegisterAPIView.as_view()),
    path('register/companyUser/', CompanyRegisterAPIView.as_view()),
    path('update/companyUser/', UpdateCompanyUserAPIView.as_view()),
    path('update/privateUser/', UpdatePrivateUserAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('logout', LogoutView.as_view(), name='knox_logout')
]

UpdateCompanyUserAPIView