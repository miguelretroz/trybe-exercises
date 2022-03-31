def best_combinations(product_list):
    combinations_count = 0

    for index, elem in enumerate(product_list):
        for _, int_elem in enumerate(product_list[(index + 1):]):
            if elem == int_elem:
                combinations_count += 1

    return combinations_count


print(best_combinations([1, 3, 1, 1, 2, 3]))
print(best_combinations([1, 1, 2, 3]))
