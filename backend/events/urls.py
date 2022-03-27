from django.urls import path
from events import views

urlpatterns = [
    path('', views.EventList.as_view()),
    path('event/<int:pk>/', views.EventDetail.as_view()),
    path('join/<int:pk>/', views.EventUserJoin.as_view()),
    
]