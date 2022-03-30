from Array import Array

array = Array()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")


print(array.get(0))
print(array.get(1))
print("-----")

index = 0

while index < len(array):
    print("Index", index, ", Nome: ", array.get(index))
    index += 1
