from Matrix import Matrix

print("--- Arrays multidimensionais")
array = Matrix()
array.set(0, 0, "Marcos")
array.set(0, 1, 6)
array.set(0, 2, 9)

array.set(1, 0, "Patrícia")
array.set(1, 1, 9)
array.set(1, 2, 6)

print(array)

array.remove(0, 2)

print(array)
