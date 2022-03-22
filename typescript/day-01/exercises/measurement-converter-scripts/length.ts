import readlineSync from 'readline-sync';

const conversionTableInMeter: { [key: string]: number } = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
};

export function convert(value: number, unitBase: string, conversionUnit: string): number {
  return (value * conversionTableInMeter[unitBase]) / conversionTableInMeter[conversionUnit];
}

export function exec(): void {
  const unitTable = Object.keys(conversionTableInMeter);

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
