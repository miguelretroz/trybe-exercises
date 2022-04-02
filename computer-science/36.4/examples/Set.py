class Set():
    def __init__(self):
        self._numbers = [False for _ in range(1001)]

    def add(self, item):
        self._numbers[item] = True

    def __str__(self):
        result = []

        for index, elem in enumerate(self._numbers):
            if elem:
                result.append(index)

        return str(result)

    def __contains__(self, item):
        return item in self._numbers
