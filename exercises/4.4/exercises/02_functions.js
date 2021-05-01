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
