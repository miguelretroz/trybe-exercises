def substring(string):
    highest = 0

    for index, _ in enumerate(string):
        substring_letters = set()
        for letter in string[index:]:
            if letter in substring_letters:
                break
            substring_letters.add(letter)

        if len(substring_letters) > highest:
            highest = len(substring_letters)

    return highest
