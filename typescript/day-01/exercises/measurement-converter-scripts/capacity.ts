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
