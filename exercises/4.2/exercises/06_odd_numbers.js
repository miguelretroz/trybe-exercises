let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddAmount = 0;

for (let number of numbers) {
    if ((number % 2) !== 0) {
        oddAmount += 1;
    };
};

console.log(oddAmount);