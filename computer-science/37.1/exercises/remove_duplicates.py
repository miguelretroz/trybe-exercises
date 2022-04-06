def remove_duplicates_of_linked_list(linked_list):
    new_linked_list = LinkedList()
    list_elements = set()

    current_list_element = linked_list.remove_first()
    while current_list_element:
        if current_list_element.value not in list_elements:
            list_elements.add(current_list_element.value)
            new_linked_list.insert_first(current_list_element.value)

        current_list_element = linked_list.remove_first()

    return new_linked_list


if __name__ == "__main__":
    from linked_list import LinkedList

    linked_list = LinkedList()

    linked_list.insert_first(2)
    linked_list.insert_first(1)
    linked_list.insert_first(1)
    print(linked_list)

    print(remove_duplicates_of_linked_list(linked_list))
