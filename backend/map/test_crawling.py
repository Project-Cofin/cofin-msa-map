from common.models import ValueObject
import pandas as pd
from selenium import webdriver
from bs4 import BeautifulSoup


class CrawlingTest(object):
    def __init__(self):
        pass

    def execute(self):
        vo = ValueObject()
        vo.context = './data/'
        vo.url = 'https://www.worldometers.info/coronavirus'
        driver = webdriver.Chrome(f'{vo.context}chromedriver')
        driver.get(vo.url)
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        tables = soup.select('table')
        table = tables[0]
        table_html = str(table)
        table_df_list = pd.read_html(table_html)
        table_df = table_df_list[0]
        # print(table_df)
        table_df = table_df.loc[:, ['Country,Other', 'TotalCases', 'TotalDeaths', 'TotalRecovered', 'Population']]
        table_df = table_df.iloc[1:-1]
        table_df.rename(columns={'Country,Other': 'Country'}, inplace=True)
        table_df.fillna(0)
        table_df.loc[(table_df.Country == 'USA'), 'Country'] = 'United States of America'
        table_df.loc[(table_df.Country == 'UK'), 'Country'] = 'United Kingdom of Great Britain and Northern Ireland'
        table_df.loc[(table_df.Country == 'Russia'), 'Country'] = 'Russian Federation'
        table_df.loc[(table_df.Country == 'Iran'), 'Country'] = 'Iran (Islamic Republic of)'
        table_df.loc[(table_df.Country == 'Vietnam'), 'Country'] = 'Viet Nam'
        table_df.loc[(table_df.Country == 'Georgia'), 'Country'] = 'South Georgia and the South Sandwich Islands'
        table_df.loc[(table_df.Country == 'UAE'), 'Country'] = 'United Arab Emirates'
        table_df.loc[(table_df.Country == 'Bolivia'), 'Country'] = 'Bolivia (Plurinational State of)'
        table_df.loc[(table_df.Country == 'Palestine'), 'Country'] = 'Palestine, State of'
        table_df.loc[(table_df.Country == 'Venezuela'), 'Country'] = 'Venezuela (Bolivarian Republic of)'
        table_df.loc[(table_df.Country == 'S. Korea'), 'Country'] = 'Korea, Republic of'
        table_df.loc[(table_df.Country == 'Moldova'), 'Country'] = 'Moldova, Republic of'
        table_df.loc[(table_df.Country == 'Ivory Coast'), 'Country'] = "Côte d'Ivoire"
        table_df.loc[(table_df.Country == 'DRC'), 'Country'] = "Congo, Democratic Republic of the"
        table_df.loc[(table_df.Country == 'Laos'), 'Country'] = "Lao People's Democratic Republic"
        table_df.loc[(table_df.Country == 'Syria'), 'Country'] = "Syrian Arab Republic"
        table_df.loc[(table_df.Country == 'Tanzania'), 'Country'] = "Tanzania, United Republic of"
        table_df.loc[(table_df.Country == 'Taiwan'), 'Country'] = "Taiwan, Province of China"
        table_df.loc[(table_df.Country == 'Channel Islands'), 'Country'] = "Jersey"
        table_df.loc[(table_df.Country == 'Brunei'), 'Country'] = "Brunei Darussalam"
        table_df.loc[(table_df.Country == 'CAR'), 'Country'] = "Central African Republic"
        table_df.loc[(table_df.Country == 'St. Vincent Grenadines'), 'Country'] = "Saint Vincent and the Grenadines"
        table_df.loc[(table_df.Country == 'Sint Maarten'), 'Country'] = "Sint Maarten (Dutch part)"
        table_df.loc[(table_df.Country == 'Saint Martin'), 'Country'] = "Saint Martin (French part)"
        table_df.loc[(table_df.Country == 'Turks and Caicos'), 'Country'] = "Turks and Caicos Islands"
        table_df.loc[(table_df.Country == 'Faeroe Islands'), 'Country'] = "Faroe Islands"
        table_df.loc[(table_df.Country == 'British Virgin Islands'), 'Country'] = "Virgin Islands (British)"
        table_df.loc[(table_df.Country == 'St. Barth'), 'Country'] = "Saint Barthélemy"
        table_df.loc[(table_df.Country == 'Falkland Islands'), 'Country'] = "Falkland Islands (Malvinas)"
        table_df.loc[(table_df.Country == 'Saint Pierre Miquelon'), 'Country'] = "Saint Pierre and Miquelon"
        table_df.loc[(table_df.Country == 'Saint Helena'), 'Country'] = "Saint Helena, Ascension and Tristan da Cunha"
        table_df.loc[(table_df.Country == 'Micronesia'), 'Country'] = "Micronesia (Federated States of)"
        table_df.to_csv(vo.context+'new_data/manufactured_corona_cases.csv', index=False)
        # print(table_df)
        driver.close()


if __name__ == '__main__':
    c = CrawlingTest()
    c.execute()