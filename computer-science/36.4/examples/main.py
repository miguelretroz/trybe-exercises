from Set import Set

if __name__ == "__main__":
    numbers = Set()
    for n in [0, 10, 100, 1000]:
        numbers.add(n)

    print(numbers)

    print("Contains: 0", 0 in numbers)
    print("Contains 2:", 2 in numbers)

    setA = Set()
    setA.add(1)
    setA.add(10)

    setB = Set()
    setB.add(10)
    setB.add(20)

    print("Union {1, 10} {10, 20}:", setA.union(setB))

    intersectionSetA = Set()
    intersectionSetA.add(1)
    intersectionSetA.add(2)
    intersectionSetA.add(3)

    intersectionSetB = Set()
    intersectionSetB.add(3)
    intersectionSetB.add(4)
    intersectionSetB.add(5)

    print(
        "Intersection {1, 2, 3} {3, 4, 5}:",
        intersectionSetA.intersection(intersectionSetB),
    )

    intersectionSetC = Set()
    intersectionSetC.add(0)
    intersectionSetC.add(3)
    intersectionSetC.add(6)
    intersectionSetC.add(9)

    intersectionSetD = Set()
    intersectionSetD.add(12)
    intersectionSetD.add(15)
    intersectionSetD.add(18)

    print(
        "Intersection {0, 3, 6, 9} {12, 15, 18}:",
        intersectionSetC.intersection(intersectionSetD),
    )
