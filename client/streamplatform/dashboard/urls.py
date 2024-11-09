from django.urls import path

from .views import dashboard

urlpatters = [
    path('dashboard', dashboard, name="dashboard")
]