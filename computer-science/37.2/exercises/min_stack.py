from stack import Stack


class MinStack(Stack):
    def min_value(self):
        if self.is_empty():
            return None

        min_value = 0

        for num in self._data:
            if num < min_value:
                min_value = num

        return min_value


if __name__ == "__main__":
    stack = MinStack()

    stack.push(1)
    stack.push(-2)
    stack.push(3)

    print(stack.min_value())
