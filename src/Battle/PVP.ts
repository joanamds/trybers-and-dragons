import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  player1: Character;
  player2: Character;

  constructor(p1: Character, p2: Character) {
    super(p1);
    this.player1 = p1;
    this.player2 = p2;
  }
}