import character from './character';
import gameMethods from './gameMethods';

const charMethods = {};

charMethods.useItem = function(item) {
  character.hp += item.value;
  if (character.hp <= 0) {
    gameMethods.endOfGame(); //do i have to pass the graveyard into this?
  }
};

charMethods.pickUpItem = function(item) {
  character.inventory.push(item);
};

export default charMethods;