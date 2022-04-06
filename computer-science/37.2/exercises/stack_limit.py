from stack import Stack
from stack_overflow import StackOverflow


class StackLimit(Stack):
    def __init__(self, max_length):
        super().__init__()
        self._max_length = max_length

    def push(self, value):
        if self.size() == self._max_length:
            raise StackOverflow

        self._data.append(value)


if __name__ == "__main__":
    stack = StackLimit(2)

    stack.push(1)
    stack.push(-2)

    try:
        stack.push(3)
        print(stack)
    except StackOverflow:
        print("Não é possível adicionar outro item à pilha")
