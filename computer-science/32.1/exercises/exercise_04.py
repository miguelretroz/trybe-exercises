names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_name(names_list):
    biggest_name = ''

    for name in names_list:
        if len(name) > len(biggest_name):
            biggest_name = name


print(biggest_name(names))
