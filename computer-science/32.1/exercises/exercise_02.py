numbers_list = [0, 1, 5, 4, 7]


def avg(numbers_list):
    total = 0

    for number in numbers_list:
        total += number

    return total / len(numbers_list)


print(avg(numbers_list))
