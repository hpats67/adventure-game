import weaponMethods from '../src/models/weaponMethods';

import chai from 'chai';

const {assert} = chai;

describe('the get weapon method', () => {

  it('gets a weapon', () => {
    const returnedArray = weaponMethods.get();
    assert.isOk(returnedArray[0].type, 'itemMethods.get returns an object with a type property');
  });

});