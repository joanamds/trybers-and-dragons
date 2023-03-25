import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  lifePoints: number;
  strength: number;
  defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private name: string) {
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = Elf.defaultElf(this._dexterity);
    this._archetype = new Mage('default');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this.lifePoints = this._maxLifePoints;
    this.strength = Math.floor(Math.random() * 10) + 1;
    this.defense = Math.floor(Math.random() * 10) + 1;
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
    return this.lifePoints;
  }

  getStrength(): number {
    return this.strength;
  }

  getDefense(): number {
    return this.defense;
  }

  getDexterity(): number {
    return this._dexterity;
  }

  getEnergy(): Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.defense - attackPoints;
    let lp = this.lifePoints;
    if (damage > 0) {
      const result = lp - damage;
      return result;
    }
    if (damage <= 0) {
      const result = lp - 1;
      return result;
    }
    if (lp <= 0) {
      lp = 1;
    }

    return lp;
  }

  attack(enemy: Fighter): void {
    const damage = this.strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    const min = 1;
    const max = 10; 
    const maxRaceLifePoints = this._race.maxLifePoints; 

    this._maxLifePoints += Math.floor(Math.random() * (max - min + 1) + min);
    this.strength += Math.floor(Math.random() * (max - min + 1) + min);
    this._dexterity += Math.floor(Math.random() * (max - min + 1) + min);
    this.defense += Math.floor(Math.random() * (max - min + 1) + min);
    this._energy.amount = 10;

    if (this._maxLifePoints > maxRaceLifePoints) {
      this._maxLifePoints = maxRaceLifePoints;
    }
    
    this.lifePoints = this._maxLifePoints;
  }
}