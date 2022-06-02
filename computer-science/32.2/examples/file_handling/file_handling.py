file = open("file.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

file = open("file.txt", mode="r")
for line in file:
    print(line)

file.close()
