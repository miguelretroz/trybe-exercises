def reverse_iter(list):
    reverseList = []
    for index, _ in enumerate(list):
        reverseList.append(list[(len(list) - 1) - index])

    return reverseList


letters = ["a", "b", "c", "d", "e"]
print(reverse_iter(letters))


def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]
