from abc import ABC, abstractmethod
import gzip
import json
import csv
from zipfile import ZipFile


class Serializer(ABC):
    # def __init__(self, filepath="./"):
    #     self.filepath = filepath

    @abstractmethod
    def serialize(cls, data):
        raise NotImplementedError


class ZipCompressor(Serializer):
    # def __init__(self, filepath="./"):
    #     self.filepath = filepath
    FILE_PATH = "./"

    @classmethod
    def compress(cls, file_name):
        with ZipFile(cls.FILE_PATH + file_name + ".zip", "w") as zip_file:
            zip_file.write(file_name)

    @classmethod
    def serialize(cls, data):
        pass


class GzCompressor(Serializer):
    def __init__(self, filepath="./"):
        self.filepath = filepath

    @staticmethod
    def compress(file_name):
        with open(file_name, "rb") as content:
            with gzip.open(file_name + ".gz", "wb") as gzip_file:
                gzip_file.writelines(content)

    @classmethod
    def serialize(cls, data):
        pass


class SalesReport(ABC):
    def __init__(self, export_file, compressor=GzCompressor):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        """ Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos! """
        return [{
            "Coluna 1": "Dado 1",
            "Coluna 2": "Dado 2",
            "Coluna 3": "Dado 3"
            },
            {
            "Coluna 1": "Dado A",
            "Coluna 2": "Dado B",
            "Coluna 3": "Dado C"
            }]

    FILE_EXTENSION = ''

    def get_export_file_name(self):
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    def get_length(self):
        return len(self.build())


class SalesReportJSON(SalesReport):
    FILE_EXTENSION = ".json"

    def serialize(self):
        with open(self.get_export_file_name(), "w") as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    FILE_EXTENSION = ".csv"

    def serialize(self):
        with open(self.get_export_file_name(), "w") as file:
            writer = csv.writer(file)
            writer.writerow(self.build()[1].keys())
            for data in self.build():
                writer.writerow(data.values())


purchase_report_json = SalesReportJSON("my_purchase_report")
sale_report_json = SalesReportJSON(
    "my_sale_report", ZipCompressor)

purchase_report_json.compress()
sale_report_json.compress()

purchase_report_csv = SalesReportCSV("my_purchase_report")
sale_report_csv = SalesReportCSV("my_sale_report", ZipCompressor)

purchase_report_csv.compress()
sale_report_csv.compress()
