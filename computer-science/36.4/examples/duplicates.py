def duplicates(numbers):
    set_of_numbers = set()

    for number in numbers:
        if number in set_of_numbers:
            return number

        set_of_numbers.add(number)


if __name__ == "__main__":
    print(duplicates([1, 3, 2, 4, 5, 1]))
