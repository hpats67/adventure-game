const monsters = require('./monsters');

const monsterMethods = {};

monsterMethods.get = function() {
  let pickMonster = Math.floor(Math.random() * (monsters.compendium.length + 1));
  let removedMonster = monsters.compendium.splice(pickMonster, 1);
  monsters.active.push(removedMonster);

  console.log(removedMonster);
  return removedMonster;
};


// bury dead monster

  //splice from compendium
  //push to active
  //return to room
//monsterMethods.bury
  //remove from active
  //push to graveyard

monsterMethods.get();

module.exports = monsterMethods;

