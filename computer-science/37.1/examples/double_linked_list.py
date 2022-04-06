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

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        current_value = self.head
        while position > 1:
            current_value = current_value.next
            position -= 1

        next_value = DoubleLinkedNode(value)
        next_value.previous = current_value
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head

        if value_to_be_removed:
            self.head = self.head.next
            self.head.previous = None
            value_to_be_removed.next = None
            self.__length -= 1

            if self.is_empty():
                self.tail = None

        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.tail.previous
        value_to_be_removed = self.tail
        previous_to_be_removed.next = None
        self.tail = previous_to_be_removed
        self.__length -= 1

        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.head
        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        if position >= len(self):
            return self.tail

        value_returned = None
        value_to_be_returned = self.head

        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1

            if value_to_be_returned:
                value_returned = DoubleLinkedNode(value_to_be_returned.value)

        return value_returned
