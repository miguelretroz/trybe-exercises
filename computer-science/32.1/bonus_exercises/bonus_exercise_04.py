def fuel(liters, type):
    if type == 'A':
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05

    elif type == 'G':
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total *= (1 - discount)
    return total


print(fuel(10, 'A'))
