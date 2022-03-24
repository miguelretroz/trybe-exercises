def linear_search(array, value):
    for index, element in enumerate(array):
        if element == value:
            return index

    return -1

if __name__ == "__main__":
    print(linear_search([1, 2, 3], 2))
    print(linear_search([1, 2, 3], 4))

    print([1, 2, 3].index(2))
    print([1, 2, 3].index(4))
