from django.urls import path, include
from knox.views import LogoutView
from .views import UserAPIView, LoginAPIView, RegisterAPIView, UserCreatedEventsAPIView, UserEventsAPIView, GetUserAPIView

urlpatterns = [
    path('', include('knox.urls')),
    path('user', UserAPIView.as_view()),
    path('register', RegisterAPIView.as_view(), name = 'register'),
    path('login', LoginAPIView.as_view()),
    path('logout', LogoutView.as_view(), name='knox_logout'),
    path('participants/<int:pk>/', UserEventsAPIView.as_view()),
    path('createdby/<int:pk>/', UserCreatedEventsAPIView.as_view()),
    path('user/<int:pk>/', GetUserAPIView.as_view()),
    
]