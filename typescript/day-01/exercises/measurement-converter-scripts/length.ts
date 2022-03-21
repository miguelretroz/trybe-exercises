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
