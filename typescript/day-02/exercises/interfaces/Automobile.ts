interface Automobile {
  name: string;
  manufacturer: string;
  color: string;
  doors: number;
  gears: number;
  turnOn(): void;
  turnOff(): void;
  speedUp: () => void;
  speedDow: () => void;
  break: () => void;
}
