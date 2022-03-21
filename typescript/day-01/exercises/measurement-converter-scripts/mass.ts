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
