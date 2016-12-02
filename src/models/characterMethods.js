let character = require('./character');

const charMethods = {};

charMethods.setName = function(name) {
  character.name = name;
  return character;
};

charMethods.useItem = function(item) {
  character.hp += item.value;
};

charMethods.pickUpItem = function(item) {
  character.inventory.push(item);
};

