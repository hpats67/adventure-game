import weaponMethods from '../src/models/weaponMethods';
import weapons from '../src/models/weapons';

import chai from 'chai';

const {assert} = chai;

describe('the get weapon method', () => {
  const returnedObj = weaponMethods.get();

  it('gets a weapon', () => {
    assert.isOk(returnedObj.type, 'weaponMethods.get does not return an object with a type property');
  });

  it('removes weapon from weapons array', () => {
    assert.notInclude(weapons, returnedObj, 'weaponMethods.get does not remove an object from array');
  });

});