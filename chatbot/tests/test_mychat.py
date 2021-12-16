from gensim.models import Word2Vec
from konlpy.tag import Komoran
import time
import pandas as pd

class MyChat:
    def __init__(self):
        pass

    def execute(self):
        # 측정 시작
        start = time.time()

        # 리뷰 파일 읽어오기
        print('1) 말뭉치 데이터 읽기 시작')
        review_data = pd.read_csv('../data/sample_chat.csv')
        review_data = review_data['question']
        print(len(review_data)) # 리뷰 데이터 전체 개수
        print('1) 말뭉치 데이터 읽기 완료: ', time.time() - start)

        # 문장단위로 명사만 추출해 학습 입력 데이터로 만듬
        print('2) 형태소에서 명사만 추출 시작')
        komoran = Komoran(userdic='../data/user_dic.tsv')
        docs = [komoran.nouns(sentence) for sentence in review_data]
        print('2) 형태소에서 명사만 추출 완료: ', time.time() - start)
        print(review_data[0])
        print(komoran.pos(review_data[0]))
        print(docs[0])
        # word2vec 모델 학습
        # print('3) word2vec 모델 학습 시작')
        # model = Word2Vec(sentences=docs, vector_size=200, window=4, min_count=2, sg=1)
        # print('3) word2vec 모델 학습 완료: ', time.time() - start)

        # 모델 저장
        # print('4) 학습된 모델 저장 시작')
        # model.save('../data/new_data/nvmc.model')
        # print('4) 학습된 모델 저장 완료: ', time.time() - start)

        # 학습된 말뭉치 개수, 코퍼스 내 전체 단어 개수
        # print("corpus_count : ", model.corpus_count)
        # print("corpus_total_words : ", model.corpus_total_words)

    def execute2(self):
        ko = Komoran(userdic='../data/user_dic.tsv')
        print(ko.pos("우리 챗봇은 엔엘피를 좋아해"))


if __name__ == '__main__':
    mc = MyChat()
    mc.execute()
    # mc.execute2()