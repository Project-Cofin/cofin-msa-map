from django.conf.urls import url

from map import views

urlpatterns = [
    url(r'upload', views.upload),
    url(r'world', views.world_maps),
    url(r'med-points', views.med_point_maps),
]