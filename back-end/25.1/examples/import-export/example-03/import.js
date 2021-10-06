const brlValue = require('./export');

console.log(brlValue);

console.log(`Valor do dólar: ${brlValue.brl}`);
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`);