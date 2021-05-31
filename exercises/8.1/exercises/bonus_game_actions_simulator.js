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

const mageDmg = (intelligence, mana, callback) => {
  if (mana >= 15) {
    return {
      damage: callback(intelligence, (intelligence * 2)),
      manaSpending: 15,
    }
  }
  
  return {
    damage: 'Não possui man suficiente',
    manaSpending: 0,
  }
}