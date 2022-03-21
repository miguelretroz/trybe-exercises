import * as Functions from './functions';

console.log(Functions.greeter('Maria'));
console.log(Functions.personAge('Maria', 40));
console.log(`A soma da array é igual a ${Functions.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Functions.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Functions.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Functions.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Functions.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Functions.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Functions.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Functions.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Functions.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Functions.rectangle(10, 25)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Functions.lozenge(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagonal menor 50cm: ${Functions.lozenge(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagonal menor 25cm: ${Functions.lozenge(75, 25)}cm²`);

console.log(`Trapézio de base maior 100cm, base menor 70cm e altura 50cm : ${Functions.trapeze(100, 70, 50)}cm2`);
console.log(`Trapézio de base maior 75cm e base menor 50cm e altura 35cm: ${Functions.trapeze(75, 50, 35)}cm²`);
console.log(`Trapézio de base maior 150cm e base menor 120cm e altura 80com: ${Functions.trapeze(150, 120, 80)}cm²`);

console.log(`Círculo de raio 25cm: ${Functions.circle(25)}cm²`);
console.log(`Círculo de raio 100cm: ${Functions.circle(100)}cm²`);
console.log(`Círculo de raio 12.5cm: ${Functions.circle(12.5)}cm²`);
