def char_dict(text):
    result = dict()
    for char in text:
        if char not in result:
            result[char] = 1
        else:
            result[char] += 1

    return result


print(char_dict("bbbbaaaacccaaaaaaddddddddccccccc"))
print(char_dict("coxinha"))
