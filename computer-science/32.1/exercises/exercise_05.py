import math


def total_ink_calc(wall_size):
    liters = wall_size / 3
    cans = math.ceil(liters / 18)
    total_value = 80.00 * cans
    return (cans, total_value)


print(total_ink_calc(100))
