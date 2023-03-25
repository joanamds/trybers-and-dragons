import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private name: string) {
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = Elf.defaultElf(this._dexterity);
    this._archetype = new Mage('default');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * 10) + 1;
    this._defense = Math.floor(Math.random() * 10) + 1;
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10) + 1, 
    };
  }

  getRace(): Race {
    return this._race;
  }

  getArchetype(): Archetype {
    return this._archetype;
  }

  getLifePoints(): number {
    return this._lifePoints;
  }

  getStrength(): number {
    return this._strength;
  }

  getDefense(): number {
    return this._defense;
  }

  getDexterity(): number {
    return this._dexterity;
  }

  getEnergy(): Energy {
    return this._energy;
  }
}