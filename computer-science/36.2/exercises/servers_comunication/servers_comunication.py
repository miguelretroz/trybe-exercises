def get_element(line, row, matrix):
    if line >= 0 and row >= 0:
        try:
            return matrix[line][row]
        except IndexError:
            return 0
    else:
        return 0


def servers_comunication(servers):
    servers_comunication_count = 0

    for line_index, servers_line in enumerate(servers):
        for row_index, server in enumerate(servers_line):
            if server:
                left = get_element(line_index, (row_index - 1), servers)
                right = get_element(line_index, (row_index + 1), servers)
                up = get_element((line_index - 1), row_index, servers)
                down = get_element((line_index + 1), row_index, servers)

                if left or right or up or down:
                    servers_comunication_count += 1

    return servers_comunication_count


print(servers_comunication([[1, 0], [0, 1]]))
print(servers_comunication([[1, 0], [1, 1]]))
print(servers_comunication([[1, 0, 0], [1, 0, 0], [0, 0, 1]]))
