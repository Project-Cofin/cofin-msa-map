from django.conf.urls import url

from map import views

urlpatterns = [
    url(r'upload', views.upload),
    url(r'world_maps', views.world_maps),
]