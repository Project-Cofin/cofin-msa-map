from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, parser_classes

from chatbot.models_data import DbUploader
from chatbot.models import HealthStatus
from chatbot.serializer import HealthStatusSerializer


@api_view(['GET'])
@parser_classes([JSONParser])
def upload(request):
    print('############ 1 ##########')
    DbUploader().insert_data()
    return JsonResponse({'Chatbot Data Upload': 'SUCCESS'})


@api_view(['GET'])
@parser_classes([JSONParser])
def check_list(request):
    selections = HealthStatus.objects.all()
    serializer = HealthStatusSerializer(selections, many=True)
    return JsonResponse(data=serializer.data, safe=False)