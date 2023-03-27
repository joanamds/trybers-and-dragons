import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  player1: Character | Fighter;
  player2: Character | Fighter;

  constructor(p1: Character | Fighter, p2: Character | Fighter) {
    super(p1);
    this.player1 = p1;
    this.player2 = p2;
  }

  fight(): number {
    do {
      this.player1.attack(this.player2);
      if (this.player2.lifePoints > 0) {
        this.player2.attack(this.player1);
      }
    }
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0);

    if (this.player1.lifePoints > this.player2.lifePoints) {
      return 1;
    }
    return -1;
  }
}