from linked_list import LinkedList
from double_linked_list import DoubleLinkedList

if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty())  # saída: True
    linked_list.insert_first(1)
    print(linked_list)  # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(linked_list)  # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(linked_list)  # saída: LinkedList(len=3 value=Node(value=2 next=Node(value=1 next=Node(value=3 next=None))))

    linked_list.remove_last()
    print(linked_list)  # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_first()
    print(linked_list)  # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_at(5, 1)
    print(linked_list)  # saída: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))

    linked_list.remove_at(0)
    print(linked_list)  # saída: LinkedList(len=1 value=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)
    print(linked_list.get_element_at(3))  # saída: Node(value=8 next=None)

    print("--- Double Linked List ---")
    double_linked_list = DoubleLinkedList()

    print(double_linked_list.is_empty())  # saída: True
    double_linked_list.insert_first(1)
    print(double_linked_list)

    double_linked_list.insert_first(2)
    print(double_linked_list)

    double_linked_list.insert_last(3)
    print(double_linked_list)

    double_linked_list.remove_last()
    print(double_linked_list)

    double_linked_list.remove_first()
    print(double_linked_list)

    double_linked_list.insert_at(5, 1)
    print(double_linked_list)

    double_linked_list.remove_at(0)
    print(double_linked_list)

    double_linked_list.insert_at(6, 1)
    double_linked_list.insert_at(7, 2)
    double_linked_list.insert_at(8, 3)
    double_linked_list.insert_at(9, 4)
    print(double_linked_list.get_element_at(3))
