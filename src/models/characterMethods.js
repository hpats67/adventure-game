import character from './character';
import gameMethods from './gameMethods';
import monsterMethods from './monsterMethods';

const charMethods = {};

charMethods.useItem = function(item) {
  character.hp += item.value;
  charMethods.deleteFromInv(item);
  if (character.hp <= 0) {
    gameMethods.endOfGame();
  }
};

//more functionality will probably go in this method when
//we write the click on items/weapons buttons methods
charMethods.pickUpItem = function(item) {
  character.inventory.push(item);
};

charMethods.deleteFromInv = function(item) {
  let index = character.inventory.indexOf(item);
  character.inventory.splice(index, 1);
};

charMethods.battleMonster = function(weapon, currRoom) {
  //check if matches monster weakness
  if (weapon.name === currRoom.monster.weakness) {
    charMethods.deleteFromInv(weapon);
    monsterMethods.bury(currRoom.monster);
    currRoom.monster = false;
  }else{
    gameMethods.hurtCharacter(currRoom.monster);
  }
};

export default charMethods;