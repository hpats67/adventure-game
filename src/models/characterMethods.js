import character from './character';
import gameMethods from './gameMethods';
import monsterMethods from './monsterMethods';

const charMethods = {};

charMethods.useItem = function(item) {
  character.hp += item.value;
  if (character.hp <= 0) {
    gameMethods.endOfGame();
  }
};

charMethods.pickUpItem = function(item) {
  character.inventory.push(item);
};

charMethods.deleteFromInv = function(item) {
  character.inventory = character.inventory.filter(function(el) {
    return el.name !== item.name;
  });
};

charMethods.battleMonster = function(item, monster) {
  //check if matches monster weakness
  if (item.name === monster.weakness) {
    charMethods.deleteFromInv(item);
    //TODO: remove monster from room square in room obj
    monsterMethods.bury(monster);
  }else{
    gameMethods.hurtCharacter(monster);
  }
};

export default charMethods;