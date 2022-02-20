try:
    students = open("students.txt", mode="r")
except OSError:
    print("Arquivo não encontrado")
else:
    approved = open("approved.txt", mode="w")
    for studentData in students:
        student = studentData.split(" ")
        if int(student[1]) >= 6:
            approved.write(f"{student[0]}\n")

    students.close()
    approved.close()
