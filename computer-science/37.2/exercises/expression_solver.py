from stack import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "-":
            num_one = stack.pop()
            num_two = stack.pop()
            if num_one > num_two:
                result = num_one - num_two
            else:
                result = num_two - num_one
            stack.push(result)
        elif token == "*":
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == "/":
            num_one = stack.pop()
            num_two = stack.pop()

            if num_one > num_two:
                result = num_one / num_two
            else:
                result = num_two / num_one
            stack.push(result)
        else:
            stack.push(int(token))

    return stack.pop()


if __name__ == "__main__":
    print(solve_expression("5 10 + 3 * 5 - 2 /"))
