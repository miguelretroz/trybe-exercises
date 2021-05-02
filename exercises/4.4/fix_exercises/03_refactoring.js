let numberA = 5;
let numberB = 3;

/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */
{
// Sum
function sum (number01, number02) {
    return (number01 + number02);
};

console.log(sum(numberA, numberB));

// Subtraction
function subtraction (number01, number02) {
    return (number01 - number02);
};

console.log(subtraction(numberA, numberB));

// Multiplication
function multiplication (number01, number02) {
    return (number01 * number02);
};

console.log(multiplication(numberA, numberB));

// Division
function division (number01, number02) {
    return (number01 / number02);
};

console.log(division (numberA, numberB));

// Modulus
function modulus (number01, number02) {
    return (number01 % number02);
};

console.log(modulus(numberA, numberB));
};

console.log();

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
{
    function higherNumber (number01, number02) {
        let higher = number01;

        if (number02 > number01) {
            higher = number02;
        };
        
        return higher;
    };

    console.log(higherNumber(numberA, numberB));
};

console.log();

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
{
    function higherInThree (number01, number02, number03) {
        let higher = number01;

        if (number02 > higher) {
            higher = number02;
        };
        if (number03 > higher) {
            higher = number03;
        };

        return higher;
    };

    console.log(higherInThree(numberA, numberB, 15));
};

console.log();

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
{
    function numberSign (number) {
        if (number > 0) {
            return 'Positive';
        } else if (number < 0) {
            return 'Negative';
        } else {
            return 'Zero';
        };
    };

    console.log(numberSign(4));
};

console.log();

/* 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo.
*/
{
    let angleA = 30;
    let angleB = 50;
    let angleC = 100;

    function triangle (angle01, angle02, angle03) {
        let angleTotal = angle01 + angle02 + angle03;
        let isTriangle = false;

        if ((angle01 >= 0 || angle02 >= 0 || angle03 >= 0) && (angleTotal === 180)) {
            isTriangle = true;
        };

        return isTriangle;
    };

    console.log(triangle(angleA, angleB, angleC));
};

console.log();

/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

- Exemplo: bishop (bispo) -> diagonals (diagonais) */
{
    let piece = 'Rook';

    function chessMovement(chessPiece) {
        chessPiece = chessPiece.toLowerCase();

        switch(chessPiece) {
            case 'king':
                console.log('King -> Move one square in any direction!');
                break;
            case 'queen':
                console.log('Queen -> Move diagonally, horizontally, or vertically any number of squares!');
                break;
            case 'rook':
                console.log('Rook -> Move horizontally or verically any number of squares!');
                break;
            case 'bishop':
                console.log('Bishop -> Move diagonally any number of squares!');
                break;
            case 'knight':
                console.log("Knight -> Move in an 'L' shape!");
                break;
            case 'pawn':
                console.log('Pawn -> Move vertically forward one square!');
                break;
            default:
                console.log('Invalid piece!');
                break;
        };
    };

    chessMovement(piece);
};

console.log();

/* 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
{
    let score = 99;

    function scoreVerification (score) {    
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
    };

    scoreVerification(score);
};

console.log();

/* 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

Bonus: use somente um if . */
{
    let firstNumber =  randomNumber(100);
    let secondNumber = randomNumber(100);
    let thridNumber = randomNumber(100);

    function randomNumber(number) {
        return (Math.ceil(Math.random() * number));
    };

    console.log(`The numbers chosen were -> ${firstNumber}, ${secondNumber}, ${thridNumber} !`);

    function isEven (numberA, numberB, numberC) {
        if ((numberA % 2) === 0 || (numberB % 2) === 0 || (numberC % 2) === 0) {
            return true;
        } else {
            return false;
        };
    };

    console.log(isEven(firstNumber, secondNumber, thridNumber));
};

console.log();

/* 9. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

Bonus: use somente um if . */
{
    let firstNumber = randomNumber(50);
    let secondNumber = randomNumber(50);
    let thridNumber = randomNumber(50);

    console.log('The numbers chosen were => ' + firstNumber + ", " + secondNumber + ', ' + thridNumber + ' !');
    
    function isOdd (numberA, numberB, numberC) {
        if ((numberA % 2) !== 0 || (numberB % 2) !== 0 || (numberC % 2) !== 0) {
            return true;
        } else {
            return false;
        };
    };

    console.log(isOdd(firstNumber, secondNumber, thridNumber));
};

console.log();

/* 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

  - valorCustoTotal = valorCusto + impostoSobreOCusto
  - lucro = valorVenda - valorCustoTotal (lucro de um produto) */
{
    let costValue = 500;
    let saleValue = 900;

    function productProfit (cost, sale, unitCount) {
        let taxValue = cost * 0.2;
        let costTotal = cost + taxValue;

        let unitProfit = sale - costTotal;

        return (unitProfit * unitCount);
    };

    console.log(`Profit per thousand sales -> U$ ${productProfit(costValue, saleValue, 1000)}`);
};

console.log();

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
{
    let grossSalary = 3000.00;

    //INSS
    function inss(salary) {
        let inssValue = 0;
        
        if (salary < 1556.95) {
            inssValue = salary * 0.08;
        } else if (salary >= 1556.95 && salary < 2594.93) {
            inssValue = salary * 0.09;
        } else if (salary >= 2594.93 && salary <= 5189.82) {
            inssValue = salary * 0.11;
        } else {
            inssValue = 570.88;
        };

        return inssValue;
    };
    
    function salaryBase (salary) {
        return (salary - inss(salary));
    };
    
    //IR
    function ir (salaryBase) {
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
        };

        return irValue;
    };

    function salaryLiquid (salary) {
        return salaryBase(salary) - ir(salaryBase(salary));
    };

    console.log(`O salário líquido é R$ ${salaryLiquid(grossSalary).toFixed(2)}`);
};