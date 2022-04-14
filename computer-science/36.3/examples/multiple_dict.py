multiples = {n: n * 2 for n in range(3, 21)}

print(multiples)

for key in multiples.keys():
    if key % 2:
        multiples[key] = key * 3

print(multiples)
