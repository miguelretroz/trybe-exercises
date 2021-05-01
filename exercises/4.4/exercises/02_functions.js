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
