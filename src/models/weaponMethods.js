import items from './weapons';

const weaponMethods = {};

weaponMethods.get = function() {
  let index = Math.floor(Math.random() * (items.length + 1));
  let selectedWeapon = items.splice(index, 1);
  return selectedWeapon; //selected weapon is an array of one object
};

export default weaponMethods;