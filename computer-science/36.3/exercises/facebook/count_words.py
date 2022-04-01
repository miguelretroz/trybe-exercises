def count_words(words, chars):
    chars_count = {}

    for char in chars:
        if char not in chars_count:
            chars_count[char] = 1
        else:
            chars_count[char] += 1

    sum_result = 0
    for word in words:
        word_chars = {}
        for char in word:
            if char not in chars_count:
                break
            if char not in word_chars:
                word_chars[char] = 1
            else:
                word_chars[char] += 1

            if word_chars[char] > chars_count[char]:
                break
        else:
            sum_result += len(word)

    return sum_result
