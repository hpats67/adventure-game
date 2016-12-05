import charMethods from '../src/models/characterMethods';
import character from '../src/models/character';
import monsters from '../src/models/monsters';
import gameMethods from '../src/models/gameMethods';

import chai from 'chai';

const {assert} = chai;

describe('the pick up item method', () => {
  
  let irrelevantItem = {
    name: 'irrelevant item',
    description: 'Easily overlooked',
    value: 0
  };

  it('adds an item to inventory', () => {
    charMethods.pickUpItem(irrelevantItem);
    assert.include(character.inventory, irrelevantItem, 'charMethods.pickUpItem does not add an object to the array');
  });

});

describe('the delete from inventory method', () => {

  let irrelevantItem = {
    name: 'irrelevant item',
    description: 'Easily overlooked',
    value: 0
  };

  it('deletes an item from inventory', () => {
    charMethods.deleteFromInv(irrelevantItem);
    assert.notInclude(character.inventory, irrelevantItem, 'charMethods.deleteFromInv does not remove an object from the array');
  });

});

//do i test all the method calls in this method?
describe('the battle a monster method', () => {
  let fakeRoom = {
    name: 'Fake Room',
    description: 'A fake room for testing',
    monster: {
      type: 'monster',
      name: 'neverwas',
      description: 'Dangerous because unkown',
      weakness: 'nothing',
      attack: 15
    }
  };

  let fakeWrongWeapon = {
    type: 'weapon',
    name: 'something',
    description: 'Something is not always better than nothing.',
  };

  let fakeRightWeapon = {
    type: 'weapon',
    name: 'nothing',
    description: 'Something is not always better than nothing.',
  };

  it('reduces character hp if wrong weapon selected', () => {
    let initCharHp = character.hp;
    charMethods.battleMonster(fakeWrongWeapon, fakeRoom);
    assert.isBelow(character.hp, initCharHp);
  });

  it('removes monster from room, puts monster in graveyard and removes object from inventory if correct weapon selected.', () => {
    let initRoomMonster = fakeRoom.monster;

    charMethods.battleMonster(fakeRightWeapon, fakeRoom);
    assert.deepEqual(fakeRoom.monster, false, 'charMethods.battleMonster did not remove monster from room');
    assert.include(monsters.graveyard, initRoomMonster, 'charMethods.battleMonster did not put monster in graveyard');
    //need an addToInventory method to do this - false positive
    assert.notInclude(character.inventory, fakeRightWeapon, 'charMethods.battleMonster did not remove weapon from inventory');
  });

});