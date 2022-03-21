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
