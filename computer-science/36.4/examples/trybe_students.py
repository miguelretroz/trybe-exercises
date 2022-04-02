def who_submitted_list(students, list):
    return students.difference(list)


def who_submitted_two_lists(list_one, list_two):
    return list_one.intersection(list_two)


def who_submitted_any_list(list_one, list_two):
    return list_one.union(list_two)


def who_not_submitted_any_list(students, list_one, list_two):
    return students.difference(list_one, list_two)


if __name__ == "__main__":
    students = set(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    list_one = set(['a', 'd', 'g', 'c'])
    list_two = set(['c', 'a', 'f'])

    print(who_submitted_list(students, list_one))
    print(who_submitted_two_lists(list_one, list_two))
    print(who_submitted_any_list(list_one, list_two))
    print(who_not_submitted_any_list(students, list_one, list_two))
