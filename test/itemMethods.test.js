import itemMethods from '../src/models/itemMethods';

import chai from 'chai';

const {assert} = chai;

describe('the get item method', () => {

  it('gets an item', () => {
    const returnedArray = itemMethods.get();
    assert.isOk(returnedArray[0].type, 'itemMethods.get returns an object with a type property');
  });

});