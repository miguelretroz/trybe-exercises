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