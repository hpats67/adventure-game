const assert = require('chai').assert;

import roomMethods from '../src/models/roomMethods';

describe('Room methods', () => {

  var bedroom1 = { name: 'bedroom1' };
  var bedroom2 = { name: 'bedroom2' };

  it('links the north room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'northDoor');
    assert.equal(bedroom1.northDoor, bedroom2.name);
    assert.equal(bedroom2.southDoor, bedroom1.name);
  });

  it('links the south room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'southDoor');
    assert.equal(bedroom1.southDoor, bedroom2.name);
    assert.equal(bedroom2.northDoor, bedroom1.name);
  });

  it('links the west room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'westDoor');
    assert.equal(bedroom1.westDoor, bedroom2.name);
    assert.equal(bedroom2.eastDoor, bedroom1.name);
  });

  it('links the east room to another room', () => {
    roomMethods.linkRooms(bedroom1, bedroom2, 'eastDoor');
    assert.equal(bedroom1.eastDoor, bedroom2.name);
    assert.equal(bedroom2.westDoor, bedroom1.name);
  });


  it('looks up a room when given an existing link', () => {

    var Foyer = { name: 'Foyer',
      description: 'You\'re in the entry of a large, old house. More of a mansion, really. ' +
      'It looks like no one has kept up with cleaning or repairs in a long time, dust and ' +
      'cobwebs cover every surface, some of the furniture is draped in dingy once-white sheets.' +
      'There doesn\'t seem to be anyone here, might as well take a look around.',
      monster: false,
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: 'Hallway', southDoor: '', eastDoor: '', westDoor: ''};
    var Hallway = { name: 'Hallway',
      description: 'A long stately hallway, lined with fading paintings and dusty statues.' +
      'The lights look like old gas lamps, but none are lit. There\'s a door at the end of the hall.',
      monster: false,
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: ''};

    const test = roomMethods.getRoom(Foyer, 'northDoor');
    assert.deepEqual(Hallway, test);

  });

  it('gets a new room when given an unused door', () => {

    var Foyer = { name: 'Foyer',
      description: 'You\'re in the entry of a large, old house. More of a mansion, really. ' +
      'It looks like no one has kept up with cleaning or repairs in a long time, dust and ' +
      'cobwebs cover every surface, some of the furniture is draped in dingy once-white sheets.' +
      'There doesn\'t seem to be anyone here, might as well take a look around.',
      monster: false,
      roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
      roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: ''};

    const testRoom = roomMethods.getRoom(Foyer, 'northDoor');
    assert.equal(Foyer.northDoor, testRoom.name);
    assert.equal(Foyer.name, testRoom.southDoor);

  });

  it('adds a monster to the roomObj.monster property', () => {

    var Foyer = { name: 'Foyer',
      monster: false,
      roomArea1: { used: true }, roomArea2: { used: true }, roomArea3: { used: true }, roomArea4: { used: true },
      roomArea5: { used: true }, roomArea6: { used: true }, roomArea7: { used: true }, roomArea8: {},
      northDoor: '', southDoor: '', eastDoor: '', westDoor: ''};
    const monsterChance = roomMethods.addMonster(Foyer);
    if (monsterChance < .40) {
      assert.isOk(Foyer.monster, 'chance was below 40%, so monster');
    } else {
      assert.isFalse(Foyer.monster, 'chance was above 40%, so no monster');
    }
  });

});