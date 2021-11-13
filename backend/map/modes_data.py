import os
import django
import csv
import sys
from common.models import ValueObject, Printer, Reader
# system setup
from map.models import Map
# SET FOREIGN_KEY_CHECKS = 0;
class DbUploader():
    def __init__(self):
        vo = ValueObject()
        reader = Reader()
        self.printer = Printer()
        vo.context = 'map/data/'
        vo.fname='med_point_211111.csv'
        self.csvfile = reader.new_file(vo)

    def insert_data(self):
        self.insert_map()

    def insert_map(self):
        with open(self.csvfile, newline='', encoding='utf8') as csvfile:
            data_reader = csv.DictReader(csvfile)
            for row in data_reader:
                m = Map()
                map = Map.objects.all().filter(name=row['name']).values()[0]
                m.id = map['id']
                Map.objects.create(type=row['product'] ,
                                       name=row['price'],
                                       address=row['price'],
                                       lat=row['price'],
                                       long=row['price'],
                                       total=row['price'],
                                       infected=row['price'],
                                       med_point_id=m)
            print('PRODUCT DATA UPLOADED SUCCESSFULY!')