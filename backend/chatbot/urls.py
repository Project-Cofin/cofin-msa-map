from django.conf.urls import url

from chatbot import views

urlpatterns = [
    url(r'upload', views.upload),
    url(r'check-list', views.check_list),
]