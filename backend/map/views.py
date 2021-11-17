from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, parser_classes

from map.modes_data import DbUploader
from map.serializer import MapSerializer
from map.models import Map
from django.db.models import Q


@api_view(['GET'])
@parser_classes([JSONParser])
def upload(request):
    print('############ 1 ##########')
    DbUploader().insert_data()
    return JsonResponse({'Product Upload': 'SUCCESS'})


@api_view(['GET'])
@parser_classes([JSONParser])
def world_maps(request):
    if request.method == 'GET':
        all_region = Map.objects.filter(type='world').order_by('-cases')[:10]
        korea = Map.objects.filter(name='S. Korea')
        serializer = MapSerializer(all_region.union(korea), many=True)
        return JsonResponse(data=serializer.data, safe=False)
