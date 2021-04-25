let a = Math.ceil(Math.random() * 100);
let b = Math.ceil(Math.random() * 100);

console.log(`A = ${a}`);
console.log(`B = ${b}`);

if (a > b) {
    console.log(`${a} is higher than ${b} !`);
} else if (a < b) {
    console.log(`${b} is higher than ${a} !`);
} else {
    console.log('Numbers equal!');
}