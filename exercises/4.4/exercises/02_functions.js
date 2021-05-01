/** 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function wordReverse(word) {
  let reverse = '';

  for (let index = (word.length - 1); index >= 0; index -= 1) {
      reverse += word[index];
  };
  return reverse;
};

function isPalindrome (word) {
    if (word === wordReverse(word)) {
        return true;
    } else {
        return false;
    };
};

console.log(isPalindrome('arara'));

console.log();

/* 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

- Array de teste: [2, 3, 6, 7, 10, 1]; .

- Valor esperado no retorno da função: 4 . */

function highestIndex(numbers) {
    let highest = numbers[0];
    let index = 0;

    for (let numberIndex in numbers) {
        if (numbers[numberIndex] > highest) {
            highest = numbers[numberIndex];
            index = numberIndex;
        };
    };
    return index;
};

console.log(highestIndex([2, 3, 6, 7, 10, 1]));

console.log();

/* 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3]; .

Valor esperado no retorno da função: 6 . */

function lowestIndex(numbers) {
    let lowest = numbers[0];
    let index = 0;

    for (let numberIndex in numbers) {
        if (numbers[numberIndex] < lowest) {
            lowest = numbers[numberIndex];
            index = numberIndex;
        };
    };
    return index;
};

console.log(lowestIndex([2, 4, 6, 7, 10, 0, -3]));

console.log();

/* 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .

Valor esperado no retorno da função: Fernanda . */

function highestName(names) {
    let highest = (names[0].length);
    let index = 0;

    for (let name in names) {
        if ((names[name].length) > highest) {
            highest = (names[name].length);
            index = name;
        };
    };
    return (names[index]);
}

console.log(highestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

console.log();

/* 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3]; .

Valor esperado no retorno da função: 2 .
 */

function numberCount(number, numbersArray) {
    let count = 0;
    for (let number02 of numbersArray) {
        if (number02 === number) {
            count += 1;
        };
    };
    return count;
};

function mostRepeatedNumber(numbersArray) {
    let previousCount = 0;
    let index = 0;

    for (let number in numbersArray) {
        let count = numberCount(numbersArray[number], numbersArray)
        if (count >= previousCount) {
            previousCount = count;
            index = number;
        };
    };
    return numbersArray[index];
};

console.log(mostRepeatedNumber([8, 3, 3, 8, 8, 8, 3]));

console.log();

/* 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5 .

Valor esperado no retorno da função: 1+2+3+4+5 = 15 . */

function sumUpTo(maxNumber) {
    let sum = 0;
    for (let index = 1; index <= maxNumber; index += 1) {
        sum += index;
    };
    return sum;
};

console.log(sumUpTo(5));

console.log();

/* 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

Valor de teste: 'trybe' e 'be'

Valor esperado no retorno da função: true

verificaFimPalavra('trybe', 'be') ;

Retorno esperado: true

verificaFimPalavra('joaofernando', 'fernan') ;

Retorno esperado: false */

function wordEnding(stringWord, stringEnding) {
    let wordIndex = (stringWord.length - stringEnding.length);

    if (stringWord[wordIndex] === stringEnding[0]) {
        for (let index = 0; index < stringEnding.length; index += 1) {
            if (stringWord[wordIndex + index] !== stringEnding[index]) {
                return false;
            };
        };
    } else {
        return false;
    };
    return true;
};

console.log(wordEnding('joaofernando', 'fernando'));