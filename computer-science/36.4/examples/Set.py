class Set():
    def __init__(self):
        self._numbers = [False for _ in range(1001)]

    def add(self, item):
        self._numbers[item] = True
