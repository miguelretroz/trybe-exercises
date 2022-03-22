import readlineSync from 'readline-sync';

const conversionTableInSquareMeter: { [key: string]: number } = {
  'km²': 1000,
  'hm²': 100,
  'dam²': 10,
  'm²': 1,
  'dm²': 0.1,
  'cm²': 0.01,
  'mm²': 0.001,
};

export function convert(value: number, unitBase: string, conversionUnit: string): number {
  return (value * conversionTableInSquareMeter[unitBase]) / conversionTableInSquareMeter[conversionUnit];
}

export function exec(): void {
  const unitTable = Object.keys(conversionTableInSquareMeter);

  console.log('---Conversor de área---');
  const value: number = readlineSync.questionFloat('Entre com o valor a ser convertido: ');

  const unitBaseNumber: number = readlineSync.keyInSelect(unitTable, 'Escolha uma unidade base: ', { cancel: 'SAIR' });

  const conversionUnitNumber: number = readlineSync.keyInSelect(unitTable, 'Entre com a unidade de conversão: ', { cancel: 'SAIR' });

  const unitBase = unitTable[unitBaseNumber];
  const conversionUnit = unitTable[conversionUnitNumber];

  const valueConverted = convert(value, unitBase, conversionUnit);

  console.log(`${value}${unitBase} é igual a ${valueConverted}${conversionUnit}`);
}

exec();
