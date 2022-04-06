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

