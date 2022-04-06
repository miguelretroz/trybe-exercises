from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def __get_node_at(self, position):
        if position < 1:
            return self.head_value

        current_value = self.head_value
        while position >= 1 and current_value.next:
            current_value = current_value.next
            position -= 1

        return current_value

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        current_value = self.__get_node_at(len(self))
        last_value = Node(value)

        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        previous_value = self.__get_node_at((position - 1))

        next_value = Node(value)
        next_value.next = previous_value.next
        previous_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(len(self) - 2)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at((position - 1))

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)

        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)

        return value_returned

    def is_empty(self):
        return not self.__length

    def clear(self):
        while not self.is_empty():
            self.remove_first()


if __name__ == "__main__":
    linked_list = LinkedList()

    linked_list.insert_first(1)
    linked_list.insert_first(2)
    linked_list.insert_first(3)
    linked_list.insert_first(4)
    print(linked_list)

    linked_list.clear()
    print(linked_list)

    linked_list.insert_first(1)
    linked_list.insert_first(2)
    linked_list.insert_last(3)
    print(linked_list)

    linked_list.insert_at(4, 1)
    print(linked_list)

    linked_list.remove_last()
    print(linked_list)

    linked_list.insert_at(5, 1)
    print(linked_list)
    linked_list.remove_at(1)
    print(linked_list)

    print(linked_list.get_element_at(1))
