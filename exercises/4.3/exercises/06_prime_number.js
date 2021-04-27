let number = 1009;

let count = 0;
for (let index = 2; index < number; index += 1) {
    if ((number % index) === 0) {
        count += 1;
    }
}

if (count === 0) {
    console.log(`${number} é um número primo!`);
} else {
    console.log(`${number} NÃO é um número primo!`);
};