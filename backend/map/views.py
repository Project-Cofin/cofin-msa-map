from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, parser_classes

from map.modes_data import DbUploader
from map.serializer import MapSerializer
from map.models import Map


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
        # ic("VIEWS 에 GET 메소드입니다~")
        all_region = Map.objects.filter(type='world').order_by('-cases')
        serializer = MapSerializer(all_region, many=True)
        # ic(serializer.data)
        # ic(serializer.data)
        return JsonResponse(data=serializer.data, safe=False)
