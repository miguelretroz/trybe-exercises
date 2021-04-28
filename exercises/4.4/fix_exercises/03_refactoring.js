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