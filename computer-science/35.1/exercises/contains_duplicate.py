def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):
            return True

        previous_number = number

    return False

# Melhor Caso-> O(n * log (n) + 1) ou O(n log n)

# Caso médio-> O(n * log(n) + n * 1/2) ou O(n log n)

# Pior Caso-> O(n * log(n) + n) ou O(n log n)
