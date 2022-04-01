from HashMap import HashMap
from Employee import Employee

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

employeesHash = HashMap()

for id, name in employees:
    employeesHash.insert(Employee(id, name))

print(employeesHash.get_value(23))

print(employeesHash.get_value(10))
employeesHash.update_value(10, "name30")
print(employeesHash.get_value(10))
