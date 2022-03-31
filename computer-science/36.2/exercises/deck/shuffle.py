def shuffle(deck):
    mid = len(deck) // 2
    new_deck = []

    for index in range(mid):
        new_deck.append(deck[index])
        new_deck.append(deck[mid + index])

    return new_deck


print(shuffle([2, 6, 4, 5]))
print(shuffle([1, 4, 4, 7, 6, 6]))
