from Array import Array
import sys

array = Array()
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(0, "Felipe")
array.set(1, "Ana")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(2, "Shirley")
array.set(3, "Miguel")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(0, "Marcos")
array.set(1, "Patrícia")
print(array)

array.set(0, "Valeria")
print(array)

array.set(1, "Miguel")
print(array)

array.remove(0)
print(array)

array.update(0, "João")
print(array)

print(array.get(0))
print(array.get(1))
print("-----")

index = 0

while index < len(array):
    print("Index", index, ", Nome: ", array.get(index))
    index += 1
