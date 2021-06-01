const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damage = (min, max) =>  Math.round(min + Math.random() * (max - min));

const mageDmg = (intelligence, mana) => {
  if (mana >= 15) {
    return {
      damage: damage(intelligence, (intelligence * 2)),
      manaSpending: 15,
    }
  }
  
  return {
    damage: 'Não possui mana suficiente',
    manaSpending: 0,
  }
}

const gameActions = {
  warriorTurn: (action) => {
    const damage = action(15, warrior.strength);
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (action) => {
    const mageDamage = action(mage.intelligence, mage.mana);
    if (typeof mageDamage.damage === 'number') {
      dragon.healthPoints -= mageDamage.damage;
      mage.mana -= mageDamage.manaSpending;
      mage.damage = mageDamage.damage;
    } else {
      mage.damage = 0;
      console.log(mageDamage.damage);
    };
  },
};
