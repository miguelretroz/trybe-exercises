let numbers = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
};

for (let number of numbers) {
    console.log(number / 2);
};