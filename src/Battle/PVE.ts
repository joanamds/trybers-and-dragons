import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  player: Character | Fighter;
  monsters: (Monster | SimpleFighter)[];

  constructor(
    player: Character,
    monsters: (Monster | SimpleFighter | Fighter) [],
  ) {
    super(player);
    this.player = player;
    this.monsters = monsters;
  }

  override fight() {
    do {
      this.monsters.forEach((monster) => {
        this.fightRound(monster);
      });
    }
    while (this.player.lifePoints > 0 && this.monsters
      .some((monster) => monster.lifePoints > 0));

    return super.fight();
  }
  
  fightRound(monster: Monster | SimpleFighter | Fighter) {
    this.player.attack(monster);
    if (monster.lifePoints > 0) {
      monster.attack(this.player);
    }
  }
}