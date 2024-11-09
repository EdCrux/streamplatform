from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
# Create your views here.

def dashboard(request : HttpRequest) -> HttpResponse:
    return HttpResponse("Hello world!")
