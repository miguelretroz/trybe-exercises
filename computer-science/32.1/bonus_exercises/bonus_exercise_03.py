def list_sum(n):
    total = 0
    for index in range(1, n + 1):
        total += index
    return total


print(list_sum(5))
