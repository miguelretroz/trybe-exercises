from stack import Stack


def get_car(parking, car):
    if parking.is_empty():
        return None

    street = Stack()

    current_car = parking.pop()
    while current_car:
        if current_car == car:
            break

        street.push(current_car)
        current_car = parking.pop()

    if not street.is_empty():
        current_car_in_street = street.pop()
        while current_car_in_street:
            parking.push(current_car_in_street)
            current_car_in_street = street.pop()

    return current_car


if __name__ == "__main__":
    parking = Stack()

    parking.push(1)
    parking.push(2)
    parking.push(3)
    parking.push(4)
    print("Parking", parking)

    print("Car", get_car(parking, 3))
    print("Parking", parking)

    print("Car", get_car(parking, 2))
    print("Parking", parking)
