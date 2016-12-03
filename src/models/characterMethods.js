import character from './character';

const charMethods = {};

charMethods.useItem = function(item) {
  character.hp += item.value;
};

charMethods.pickUpItem = function(item) {
  character.inventory.push(item);
};

export default charMethods;