from double_linked_node import DoubleLinkedNode


class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"DoubleLinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        first_value = DoubleLinkedNode(value)
        first_value.next = self.head
        self.head = first_value
        if self.is_empty():
            self.tail = first_value
        else:
            first_value.next.previous = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        current_value = self.tail

        last_value = DoubleLinkedNode(value)
        last_value.previous = current_value
        current_value.next = last_value
        self.tail = last_value
        self.__length += 1

