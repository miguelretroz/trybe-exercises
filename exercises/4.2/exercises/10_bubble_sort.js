let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[secondIndex];
            numbers[secondIndex] = numbers[index];
            numbers[index] = position;
        }
    }
}

console.log(numbers);

for (let index = 1; index < numbers.length; index += 1) {
    for (secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = numbers;

for (let index = 0; index < numbersMultiplied.length; index += 1) {
    if (index !== (numbersMultiplied.length - 1)) {
        numbersMultiplied[index] = numbersMultiplied[index] * numbersMultiplied[index + 1];
    } else {
        numbersMultiplied[index] = numbersMultiplied[index] * 2;
    }
}

console.log(numbersMultiplied);