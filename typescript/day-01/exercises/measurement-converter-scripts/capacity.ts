import readlineSync from 'readline-sync';

const conversionTableInLiter: { [key: string]: number } = {
  kl: 1000,
  hl: 100,
  dal: 10,
  l: 1,
  dl: 0.1,
  cl: 0.01,
  ml: 0.001,
};

export function convert(value: number, unitBase: string, conversionUnit: string): number {
  return (value * conversionTableInLiter[unitBase]) / conversionTableInLiter[conversionUnit];
}

export function exec(): void {
  const unitTable = Object.keys(conversionTableInLiter);

  console.log('---Conversor de capacidade---');
  const value: number = readlineSync.questionInt('Entre com o valor a ser convertido: ');

  console.log('\nTabela de unidades');
  console.table(unitTable);
  const unitBaseNumber: string = readlineSync.keyIn('Escolha uma unidade base: ', { limit: '$<0-6>' });

  console.log('\nTabela de unidades');
  console.table(unitTable);
  const conversionUnitNumber: string = readlineSync.keyIn('Entre com a unidade de conversão: ', { limit: '$<0-6>' });

  const unitBase = unitTable[parseInt(unitBaseNumber)];
  const conversionUnit = unitTable[parseInt(conversionUnitNumber)];

  const valueConverted = convert(value, unitBase, conversionUnit);

  console.log(`${value}${unitBase} é igual a ${valueConverted}${conversionUnit}`);
}

exec();
