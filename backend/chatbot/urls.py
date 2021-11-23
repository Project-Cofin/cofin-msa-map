from django.conf.urls import url

from chatbot import views

urlpatterns = [
    url(r'upload', views.upload),
]