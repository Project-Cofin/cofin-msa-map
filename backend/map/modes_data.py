import os
import django
import csv
import sys
from common.models import ValueObject, Reader
# system setup
from map.models import Map, MedPoint
# SET FOREIGN_KEY_CHECKS = 0;
from sphinx.util import requests
import json


class DbUploader():
    def __init__(self):
        self.vo = ValueObject()
        self.reader = Reader()
        self.vo.context = 'map/data/'

    def insert_data(self):
        # self.insert_med_point()
        # self.insert_world_map()
        self.insert_map_with_med_geo()

    def insert_med_point(self):
        self.vo.fname = 'med_point_20211115.csv'
        self.csvfile = self.reader.new_file(self.vo)
        with open(self.csvfile, newline='', encoding='utf8') as csvfile:
            data_reader = csv.DictReader(csvfile)
            for row in data_reader:
                if not MedPoint.objects.filter(med_point_name=row['의료기관명']).exists():
                    MedPoint.objects.create(med_point_name=row['의료기관명'])
            print('MED POINT DATA UPLOADED SUCCESSFULLY!')

    def insert_map_with_med_geo(self):
        self.vo.fname = 'med_point_20211115.csv'
        self.csvfile = self.reader.new_file(self.vo)
        with open(self.csvfile, newline='', encoding='utf8') as csvfile:
            data_reader = csv.DictReader(csvfile)
            for row in data_reader:
                # self.trans_geo(row['주소'])
                m = MedPoint()
                med_point = MedPoint.objects.all().filter(med_point_name=row['의료기관명']).values()[0]
                m.id = med_point['id']
                if not Map.objects.filter(short_name=row['의료기관명']).exists():
                    geo = self.trans_geo(row['주소'])
                    if geo != 0:
                        Map.objects.create(type='medpoint',
                                           short_name=row['의료기관명'],
                                           name=row['주소'],
                                           latitude=geo['lat'],
                                           longitude=geo['long'],
                                           med_point=m)

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
            # print(f'위도: {match_first["y"]}, 경도: {match_first["x"]}')

            return {'long': long, 'lat': lat}
        except IndexError:  # match값이 없을때
            return 0
        except TypeError:  # match값이 2개이상일때
            return 0



    def insert_world_map(self):
        self.vo.fname = 'new_data/integrated_cases.csv'
        self.csvfile = self.reader.new_file(self.vo)
        with open(self.csvfile, newline='', encoding='utf8') as csvfile:
            data_reader = csv.DictReader(csvfile)
            for row in data_reader:
                # m = Map()
                # map = Map.objects.all().filter(name=row['name']).values()[0]
                # m.id = map['id']
                if not Map.objects.filter(name=row['name']).exists():
                    Map.objects.create(type='world',
                                           short_name=row['short_name'],
                                           name=row['name'],
                                           population=row['population'],
                                           cases=row['cases']
                                       )
                else:
                    Map.objects.filter(type='world', name=row['name']).update(
                        population=row['population'], cases=row['cases'])
            print('WORLD MAP DATA UPLOADED SUCCESSFULLY!')
