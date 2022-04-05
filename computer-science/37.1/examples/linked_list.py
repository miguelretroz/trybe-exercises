from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        current_value = self.head_value
        last_value = Node(value)

        while current_value.next:
            current_value = current_value.next

        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1

        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

