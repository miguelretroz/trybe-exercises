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
