import charMethods from '../src/models/characterMethods';
import character from '../src/models/character';

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