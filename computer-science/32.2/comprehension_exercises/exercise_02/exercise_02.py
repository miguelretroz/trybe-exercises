import sys

user_inputs = input(
        "Digite os número para soma, separados por espaço: "
    ).split(" ")

has_error = False
sum = 0

for value in user_inputs:
    if not (value.isdigit()):
        has_error = True
    else:
        sum += int(value)

if (has_error):
    print(
        f"Erro ao somar valores, \"{value}\" é um valor inválido",
        file=sys.stderr
    )
else:
    print(sum)
