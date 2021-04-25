let grossSalary = 2850.50;

let inssValue = 0;

//INSS
if (grossSalary < 1556.95) {
    inssValue = grossSalary * 0.08;
} else if (grossSalary >= 1556.95 && grossSalary < 2594.93) {
    inssValue = grossSalary * 0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    innsValue = grossSalary * 0.11;
} else {
    inssValue = 570.88;
}