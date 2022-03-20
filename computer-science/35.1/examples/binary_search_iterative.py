data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print(
            "Subarray in step {}: {}".format(step, str(array[start: end + 1])))
        step += 1
        mid = (start + end) // 2

        if element == array[mid]:
            return mid

        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return - 1


print(binary_search_iterative(data, 2))
