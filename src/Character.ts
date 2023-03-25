import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10), 
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    const calculateDamage = this._lifePoints - damage;
    if (damage <= 0) {
      return this._lifePoints;
    }
    if (calculateDamage <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damage;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    const min = 1;
    const max = 10;
    const maxRaceLifePoints = this._race.maxLifePoints;
  
    this._maxLifePoints += getRandomInt(min, max);
    this._strength += getRandomInt(min, max);
    this._dexterity += getRandomInt(min, max);
    this._defense += getRandomInt(min, max);
    
    if (this._maxLifePoints >= maxRaceLifePoints) {
      this._maxLifePoints = maxRaceLifePoints;
    }
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }  
}