import csv
import json

from django.test import TestCase
from sphinx.util import requests

from common.models import ValueObject, Reader
# from map.models import Map, MedPoint


class GetLatLng:
    def __init__(self):
        pass

    def trans_geo(self, addr):
        url = 'https://dapi.kakao.com/v2/local/search/address.json?query=' + addr
        headers = {"Authorization": "KakaoAK 494e0b25b56b815a43298d2314a551a0"}
        # get 방식으로 주소를 포함한 링크를 헤더와 넘기면 result에 json형식의 주소와 위도경도 내용들이 출력된다.
        result = json.loads(str(requests.get(url, headers=headers).text))
        status_code = requests.get(url, headers=headers).status_code
        if (status_code != 200):
            # print(f"ERROR: Unable to call rest api, http_status_coe: {status_code}")
            return 0

        # print(requests.get(url, headers=headers))
        # print(result)

        try:
            match_first = result['documents'][0]['address']
            long = match_first['x']
            lat = match_first['y']
            # print(lon, lat)
            print(f'위도: {match_first["y"]}, 경도: {match_first["x"]}')

            # return {'long':long, 'lat':lat}
        except IndexError:  # match값이 없을때
            return 0
        except TypeError:  # match값이 2개이상일때
            return 0

    # def loop_trans(self):
    #     vo = ValueObject()
    #     reader = Reader()
    #     vo.context = 'data/'
    #     vo.fname = 'med_point_20211115.csv'
    #     self.csvfile = reader.new_file(vo)
    #     with open(self.csvfile, newline='', encoding='utf8') as csvfile:
    #         data_reader = csv.DictReader(csvfile)
    #         for row in data_reader:
    #             # self.trans_geo(row['주소'])
    #             m = MedPoint()
    #             med_point = MedPoint.objects.all().filter(med_point_name=row['의료기관명']).values()[0]
    #             m.id = med_point['id']
    #             geo = self.trans_geo(row['주소'])
    #             Map.objects.create(type='medpoint',
    #                                short_name=row['의료기관명'],
    #                                name=row['주소'],
    #                                lat=geo['lat'],
    #                                long=geo['long'],
    #                                med_point=m)


if __name__ == '__main__':
    g = GetLatLng()
    g.trans_geo('경기도 파주시 중앙로 207')
    # g.loop_trans()