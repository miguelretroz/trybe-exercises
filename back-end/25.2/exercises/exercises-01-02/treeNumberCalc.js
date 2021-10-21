// 1. Crie uma função que recebe três parâmetros retorna uma Promise .
//  1. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
//  2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
//  3. Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
//  4. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function treeNumberCalc (number01, number02, number03) {
  return new Promise((resolve, reject) => {
    if (
      typeof number01 !== 'number'
      && typeof number02 !== 'number'
      && typeof number03 !== 'number'
    ) return reject('Informe apenas números');

    const calc = (number01 + number02) * number03;

    if (calc < 50) return reject('Valor muito baixo');

    resolve(calc);
  });
}

module.export = treeNumberCalc;