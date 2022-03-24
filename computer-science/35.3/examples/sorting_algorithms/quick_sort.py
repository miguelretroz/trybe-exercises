def quicksort(array, low, hight):
    if len(array) == 1:
        return array

    if low < hight:
        partition_index = partition(array, low, hight)

        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, hight)


def partition(array, low, hight):
    i = low - 1
    pivot = array[hight]

    for j in range(low, hight):
        if array[j] <= pivot:
            i = i + 1
            array[i], array[j] = array[j], array[i]

    array[i + 1], array[hight] = array[hight], array[i + 1]

    return i + 1


if __name__ == "__main__":
    array = [100, 4, 6, 33, 56, 67]
    quicksort(array, 0, len(array) - 1)
    print(array)
