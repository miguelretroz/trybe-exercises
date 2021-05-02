/* 1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:

    - Uma string é um array de caracteres, então cada elemento do array é uma letra.
    - O valor de cada numeral romano é:

        | I   | 1    |
        | --- | ---- |
        | IV  | 4    |
        | V   | 5    |
        | IX  | 9    |
        | X   | 10   |
        | XL  | 40   |
        | L   | 50   |
        | XC  | 90   |
        | C   | 100  |
        | CD  | 400  |
        | D   | 500  |
        | CM  | 900  |
        | M   | 1000 |

- Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
- Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.*/

let numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function stringToNumber(numeralsArray) {
    let numberInt = [];
    for (let number of numeralsArray) {
        numberInt.unshift(numerals[number]);
    };
    return numberInt;
};

 function numbersChecker(index, array) {
     if (array[index -1] <= array[index]) {
         return array[index];
     } else {
         return - array[index];
     };
};

function romanNumerals(numbers) {
    let numeralsArray = numbers.split('');
    let numbersIntArray = stringToNumber(numeralsArray);
    let numbersTotal = numbersIntArray[0];

    for (let index = 1; index < numbersIntArray.length; index += 1) {
        numbersTotal += numbersChecker(index, numbersIntArray);
    };
    console.log(numbersTotal);
};

romanNumerals('LX');