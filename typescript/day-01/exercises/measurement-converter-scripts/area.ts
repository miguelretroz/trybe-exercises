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
  const unitTable = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

  console.log('---Conversor de área---');
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