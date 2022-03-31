def people_in_library(entries, exits, moment):
    people_count = 0

    for index, entry in enumerate(entries):
        if entry <= moment <= exits[index]:
            people_count += 1

    return people_count


print(people_in_library([1, 2, 3], [3, 2, 7], 4))
