class Warrior {
  constructor(name, hitPoints, hp) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.hp = hp;
  }

  setHp(hp) {
    this.hp = hp;
  }

  getHp() {
    return this.hp;
  }

  getHitPoints() {
    return this.hitPoints;
  }

  getName() {
    return this.name;
  }

  levelUp() {
    this.hitPoints *= 1.1;
    this.hp *= 1.1;
  }
}

class Arena {
  constructor(warrior1, warrior2) {
    if (!(warrior1 instanceof Warrior)) {
      throw new Error("warrior1 must be an instance of Warrior class!");
    }
    if (!(warrior2 instanceof Warrior)) {
      throw new Error("warrior1 must be an instance of Warrior class!");
    }

    this.warrior1 = warrior1;
    this.warrior2 = warrior2;
    this.activeWarrior = 1;
  }

  fight() {
    const attacker = this.activeWarrior === 1 ? this.warrior1 : this.warrior2;
    const attacked = this.activeWarrior === 1 ? this.warrior2 : this.warrior1;

    const attackingHitPoints = attacker.getHitPoints();
    const attackedOldHp = attacked.getHp();
    const attackedNewHp = attackedOldHp - attackingHitPoints;

    console.log(attacker.getName(), "is attacking", attacked.getName(), "and now he has", attackedNewHp, "hp");

    attacked.setHp(attackedNewHp);

    this.activeWarrior = this.activeWarrior === 1 ? 2 : 1;

    if (attackedNewHp <= 0) {
      console.log(attacked.getName(), "goes to Walhalla");
      return attacker;
    }
    return null;
  }
}

const fighter1 = new Warrior("Baba Yaga", 9, 100);
const fighter2 = new Warrior("Yanosik", 7, 140);

const arena = new Arena(fighter1, fighter2);

let winner;

do {
  winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.getName(), "is a winner!");
