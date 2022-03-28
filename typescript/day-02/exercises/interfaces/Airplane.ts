interface Airplane {
  manufacturer: string;
  model: string;
  size: number;
  weight: number;
  engines: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp(): void;
  speedDown(): void;
}