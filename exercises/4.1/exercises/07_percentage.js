/* 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let score = 99;

if (score >= 90 && score <= 100) {
    console.log('A');
} else if (score >= 80 && score < 90) {
    console.log('B');
} else if (score >= 70 && score < 80) {
    console.log('C');
} else if (score >= 60 && score < 70) {
    console.log('D');
} else if (score >= 50 && score < 60) {
    console.log('E');
} else if (score >= 0 && score < 50) {
    console.log('F');
} else {
    console.log('Invalid score!');
};