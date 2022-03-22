import readlineSync from 'readline-sync';

const conversionTableInGrass: { [key: string]: number } = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dg: 0.1,
  cg: 0.01,
  mg: 0.001,
};

export function convert(value: number, unitBase: string, conversionUnit: string): number {
  return (value * conversionTableInGrass[unitBase]) / conversionTableInGrass[conversionUnit];
}

export function exec(): void {
  const unitTable = Object.keys(conversionTableInGrass);

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
