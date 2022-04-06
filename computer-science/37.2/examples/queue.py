class Queue:
    def __init__(self):
        self._data = list()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return f"Queue(\"{str_items}\")"

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[0]
        del self._data[0]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[0]
        return value

    def clear(self):
        self._data.clear()


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_queue = Queue()

    for elem in elements:
        content_queue.push(elem)

    print(content_queue)

    print(content_queue.size())

    print(content_queue.peek())

    print(content_queue.pop())

    print(content_queue.peek())

    print(content_queue.size())

    print(content_queue.clear())

    print(content_queue.size())
