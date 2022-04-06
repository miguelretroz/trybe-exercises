from linked_list import LinkedList
from double_linked_list import DoubleLinkedList


def remove_duplicates_of_linked_list(linked_list):
    new_linked_list = LinkedList()
    elements_without_duplicates = set()

    current_list_element = linked_list.remove_first()
    while current_list_element:
        if current_list_element.value not in elements_without_duplicates:
            elements_without_duplicates.add(current_list_element.value)
            new_linked_list.insert_first(current_list_element.value)

        current_list_element = linked_list.remove_first()

    return new_linked_list


def remove_duplicates_of_double_linked_list(double_linked_list):
    new_double_linked_list = DoubleLinkedList()
    elements_without_duplicates = set()
    elements_duplicates = set()

    current_list_element = double_linked_list.remove_first()
    while current_list_element:
        if current_list_element.value not in elements_without_duplicates:
            elements_without_duplicates.add(current_list_element.value)
        else:
            elements_duplicates.add(current_list_element.value)

        current_list_element = double_linked_list.remove_first()

    for element in elements_without_duplicates.difference(elements_duplicates):
        new_double_linked_list.insert_last(element)

    return new_double_linked_list


if __name__ == "__main__":
    linked_list = LinkedList()

    linked_list.insert_first(2)
    linked_list.insert_first(1)
    linked_list.insert_first(1)
    print(linked_list)

    print(remove_duplicates_of_linked_list(linked_list))

    double_linked_list = DoubleLinkedList()

    double_linked_list.insert_last(1)
    double_linked_list.insert_last(1)
    double_linked_list.insert_last(2)
    print(remove_duplicates_of_double_linked_list(double_linked_list))

    double_linked_list_two = DoubleLinkedList()

    double_linked_list_two.insert_last(1)
    double_linked_list_two.insert_last(1)
    double_linked_list_two.insert_last(2)
    double_linked_list_two.insert_last(3)
    double_linked_list_two.insert_last(3)

    print(remove_duplicates_of_double_linked_list(double_linked_list_two))
