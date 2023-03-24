abstract class Race {
  private static _instances = 0;
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoint(): number;

  static createdRacesIntances(): number {
    this._instances += 1;
    throw new Error('Not implemented');
  }
}

export default Race;