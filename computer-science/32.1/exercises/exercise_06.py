def is_triangle(a, b, c):
    if (a + b) > c and (a + c) > b and (b + c) > a:
        if a == b == c:
            return "Triângulo Equilátero"
        elif a == b or a == c or b == c:
            return "Triângulo Isósceles"
        else:
            return "Triângulo Escaleno"
    else:
        return "não é triângulo"


print(is_triangle(1, 10, 9))
