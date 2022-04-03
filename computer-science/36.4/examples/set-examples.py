setA = set()
print("set A:", setA)

setB = set([1, 1, 2, 3, 3, 3])
print("set B:", setB)

setA.add(5)
setA.add(3)
setA.add(0)

setA.add("element")
print("set A:", setA)

setB.remove(3)

# Error
# setB.remove(3)

setB.discard(3)

some_element = setA.pop()
print("some element of set A:", some_element)

setB.clear()
print("set B clean:", setB)

if 2 in setA:
    print("2 is in A")

if 7 not in setA:
    print("7 is not in A")
