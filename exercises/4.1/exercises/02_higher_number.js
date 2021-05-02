// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.


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