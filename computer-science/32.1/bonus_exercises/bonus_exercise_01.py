def smaller_number(numbers_list):
    smaller = numbers_list[0]
    for index in numbers_list:
        if index < smaller:
            smaller = index
    return smaller


print(smaller_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
