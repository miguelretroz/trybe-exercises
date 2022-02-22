from abc import ABC, abstractmethod
import json
import csv


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

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

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)

    def get_length(self):
        return len(self.build())


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + ".csv", "w") as file:
            writer = csv.writer(file)
            writer.writerow(self.build()[1].keys())
            for data in self.build():
                writer.writerow(data.values())

    def get_length(self):
        return len(self.build())
