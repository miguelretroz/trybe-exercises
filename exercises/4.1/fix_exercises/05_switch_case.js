let score = 50;
let status;

if (score >= 80) {
    status = 'aprovada';
} else if (score >= 60) {
    status = 'lista';
} else {
    status = 'reprovada';
}

switch(status) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!');
        break;
    case "lista":
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o).');
        break;
    default:
        console.log('Não se aplica.');
        break;
}