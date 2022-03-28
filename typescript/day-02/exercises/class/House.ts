class House {
  _owner: string;
  _address: string;
  _color: string;
  _area: number;
  _numberOfRooms?: number;

  constructor (owner: string, address: string, color: string, area: number, numberOfRooms: number) {
    this._owner = owner;
    this._address = address;
    this._color = color;
    this._area = area;
    this._numberOfRooms = numberOfRooms;
  }
}