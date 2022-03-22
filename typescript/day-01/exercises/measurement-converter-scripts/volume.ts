import readlineSync from 'readline-sync';

const conversionTableInCubicMeter: { [key: string]: number } = {
  'km³': 1000,
  'hm³': 100,
  'dam³': 10,
  'm³': 1,
  'dm³': 0.1,
  'cm³': 0.01,
  'mm³': 0.001,
};

export function convert(value: number, unitBase: string, conversionUnit: string): number {
  return (value * conversionTableInCubicMeter[unitBase]) / conversionTableInCubicMeter[conversionUnit];
}

export function exec(): void {
  const unitTable = Object.keys(conversionTableInCubicMeter);

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
