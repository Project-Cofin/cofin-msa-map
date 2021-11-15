from common.models import ValueObject, Reader


class RenameCode(object):
    def __init__(self):
        pass

    def excute(self):
        vo = ValueObject()
        reader = Reader()
        vo.context = 'map/data/'
        vo.fname = 'iso_countries'
        self.csvfile = reader.new_file(vo)
        df = reader.csv(self.csvfile)
        print(df)


if __name__ == '__main__':
    r = RenameCode()
   1 r.excute()