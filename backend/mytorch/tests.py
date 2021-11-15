import urllib.request
import pandas as pd
import torch
from torchtext import data # torchtext.data 임포트
from konlpy.tag import Mecab


class KoreanTorch(object):
    def __init__(self):
        pass

    def my_mecab(self):
        urllib.request.urlretrieve("https://raw.githubusercontent.com/e9t/nsmc/master/ratings_train.txt",
                                   filename="data/ratings_train.txt")
        urllib.request.urlretrieve("https://raw.githubusercontent.com/e9t/nsmc/master/ratings_test.txt",
                                   filename="data/ratings_test.txt")

        train_df = pd.read_table('data/ratings_train.txt')
        test_df = pd.read_table('data/ratings_test.txt')
        print(f'메캅 상위 5 {train_df.head(5)}')

        print(f'훈련 데이터 샘플의 개수 : {len(train_df)}')
        print(f'테스트 데이터 샘플의 개수 : {len(test_df)}')

    def my_torchtext(self):
        pass


if __name__ == '__main__':
    # print(f'Result: {torch.cuda.is_available()}')
    k = KoreanTorch()
    k.my_mecab()