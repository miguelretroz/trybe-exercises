export function greeter(name: string) {
  return `Olá ${name}!`;
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)

export function add(x: number, y: number): number {
  return x + y;
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}
// Complexidade de tempo-> O(1 + n) ou melhor O(n)
// Complexidade de espaço-> O(1)

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)

export function square(side: number): number {
  return side ** 2;
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)

export function rectangle(base: number, height: number): number {
  return base * height;
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)

export function lozenge(D: number, d:number): number {
  return (D * d) / 2;
}
// Complexidade de tempo-> O(1)
// Complexidadde de espaço-> O(1)

export function trapeze(B: number, b: number, h: number): number {
  return ((B + b) * h) / 2;
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)

export function circle(raio: number): number {
  return 3.14159 * (raio ** 2);
}
// Complexidade de tempo-> O(1)
// Complexidade de espaço-> O(1)
