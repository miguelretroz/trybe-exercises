"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.lozenge = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
function add(x, y) {
    return x + y;
}
exports.add = add;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// Complexidade de tempo-> O(1 + n) ou melhor O(n)
// Complexidade de espaço-> O(1)
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
function square(side) {
    return side ** 2;
}
exports.square = square;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
function lozenge(D, d) {
    return (D * d) / 2;
}
exports.lozenge = lozenge;
// Complexidade de tempo-> O(1)
// Complexidadde de espaço-> O(1)
function trapeze(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapeze = trapeze;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
function circle(raio) {
    return 3.14159 * (raio ** 2);
}
exports.circle = circle;
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
