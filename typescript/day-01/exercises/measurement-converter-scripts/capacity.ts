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
  const value: number = readlineSync.questionFloat('Entre com o valor a ser convertido: ');

  const unitBaseNumber: number = readlineSync.keyInSelect(unitTable, 'Escolha uma unidade base: ', { cancel: 'SAIR' });

  const conversionUnitNumber: number = readlineSync.keyInSelect(unitTable, 'Entre com a unidade de conversão: ', { cancel: 'SAIR' });

  const unitBase = unitTable[unitBaseNumber];
  const conversionUnit = unitTable[conversionUnitNumber];

  const valueConverted = convert(value, unitBase, conversionUnit);

  console.log(`${value}${unitBase} é igual a ${valueConverted}${conversionUnit}`);
}

exec();
