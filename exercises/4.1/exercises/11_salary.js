/* 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

 INSS (Instituto Nacional do Seguro Social)
   Salário bruto até R$ 1.556,94: alíquota de 8%
   Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
   Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
   Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

 IR (Imposto de Renda)
   Até R$ 1.903,98: isento de imposto de renda
   De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
   De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
   De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
   Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

let grossSalary = 3000.00;

//INSS
let inssValue = 0;

if (grossSalary < 1556.95) {
    inssValue = grossSalary * 0.08;
} else if (grossSalary >= 1556.95 && grossSalary < 2594.93) {
    inssValue = grossSalary * 0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    inssValue = grossSalary * 0.11;
} else {
    inssValue = 570.88;
}

let salaryBase = grossSalary - inssValue;

//IR
let irValue = 0;

if (salaryBase < 1903.99) {
    irValue = 0;
} else if (salaryBase >= 1903.99 && salaryBase < 2826.66) {
    irValue = (salaryBase * 0.075) - 142.80;
} else if (salaryBase >= 2826.66 && salaryBase < 3751.06) {
    irValue = (salaryBase * 0.15) - 354.80;
} else if (salaryBase >= 3751.06 && salaryBase <= 4664.68) {
    irValue = (salaryBase * 0.225) - 636.13;
} else {
    irValue = (salaryBase * 0.275) - 869.36;
}

let salaryLiquid = salaryBase - irValue;
console.log(`O salário líquido é R$ ${salaryLiquid}`);