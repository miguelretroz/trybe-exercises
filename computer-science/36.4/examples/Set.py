class Set():
    def __init__(self):
        self._numbers = [False for _ in range(1001)]

    def __contains__(self, item):
        return self._numbers[item]

    def __str__(self):
        result = []

        for index, elem in enumerate(self._numbers):
            if elem:
                result.append(index)

        return str(result)

    def add(self, item):
        self._numbers[item] = True

    def union(self, setB):
        unionSet = Set()
        for index, elem in enumerate(self._numbers):
            if elem:
                unionSet.add(index)

        for index, elem in enumerate(setB._numbers):
            if elem:
                unionSet.add(index)

        return unionSet

    def intersection(self, setB):
        intersectionSet = Set()
        for index, elem in enumerate(self._numbers):
            if elem:
                if index in setB:
                    intersectionSet.add(index)

        return intersectionSet
