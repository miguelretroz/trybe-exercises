def sum_recursive(number):
    if number == 1:
        return 1

    return number + sum_recursive(number - 1)


print(sum_recursive(4))
