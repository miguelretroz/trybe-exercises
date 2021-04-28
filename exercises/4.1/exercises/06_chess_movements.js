/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

- Exemplo: bishop (bispo) -> diagonals (diagonais) */


let piece = 'KIn';
piece = piece.toLowerCase();

switch(piece) {
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