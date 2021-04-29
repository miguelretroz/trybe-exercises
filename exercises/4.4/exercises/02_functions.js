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