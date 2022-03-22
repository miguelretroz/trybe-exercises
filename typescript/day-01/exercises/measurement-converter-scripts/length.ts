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
