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
}