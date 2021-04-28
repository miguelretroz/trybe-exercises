// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

/* 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 

Valor esperado no console: Bem-vinda, Margarida*/
console.log(`Bem vinda, ${info.personagem}.`);

console.log();

/* 2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.*/
info.recorrente = 'Sim';
console.log(info);

console.log();

// 3. Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
    console.log(key);
};

console.log();

// 4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let key in info) {
    console.log(info[key]);
};

console.log();

// 5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info02 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info) {
    if (key === 'recorrente' && (info[key] === info02[key])) { 
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info02[key]);
    };
};