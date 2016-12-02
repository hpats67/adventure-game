let rooms = require('./rooms');
let monsterMethods = require('./monsterMethods');
let itemMethods = require('./itemMethods');
let weaponMethods = require('./weaponMethods');

const roomMethods = {};


roomMethods.addMonster = function(roomObj) {
// 40% chance of monster landing randomly in one cell in the room
  let monsterChance = Math.random();
  if (monsterChance < .40) {
    let randomCell = Math.floor((Math.random() * 9) + 1); // between 1-9
    while (roomObj['roomArea'+randomCell]) { // if there's something in the cell, do-over
      randomCell = Math.floor((Math.random() * 9) + 1);
    }
    roomObj['roomArea' + randomCell] = monsterMethods.get();  // returns a monster
  }
};

roomMethods.addItemWeapons = function(roomObj) {
// 60% chance of item - if over 90% 2 items appear
  var randomCell;
  let itemChance = Math.random();
  // if a really good roll -- you also get an item
  if (itemChance > .75) {
    randomCell = Math.floor((Math.random() * 9) + 1); // between 1-9
    while (roomObj['roomArea' + randomCell]) { // if there's something in the cell, do-over
      randomCell = Math.floor((Math.random() * 9) + 1);
    }
    roomObj['roomArea' + randomCell] = itemMethods.get();  // returns an item
  // if an ok roll, you just get a weapon
  } else if (itemChance > .30) {
    randomCell = Math.floor((Math.random() * 9) + 1);
    while (roomObj['roomArea' + randomCell]) {
      randomCell = Math.floor((Math.random() * 9) + 1);
    }
    roomObj['roomArea' + randomCell] = weaponMethods.get();
  }
};

roomMethods.linkRooms = function(startRoom, newRoom, directionTraveled) {
// link a rooms N to new room's S, etc
  switch (directionTraveled) {
  case 'n':
    startRoom.n = newRoom.name;
    newRoom.s = startRoom.name;
    break;
  case 's':
    startRoom.s = newRoom.name;
    newRoom.n = startRoom.name;
    break;
  case 'e':
    startRoom.e = newRoom.name;
    newRoom.w = startRoom.name;
    break;
  case 'w':
    startRoom.w = newRoom.name;
    newRoom.e = startRoom.name;
    break;
  }
};

roomMethods.getRoom = function(currRoomObj, direction) {
// Return if the room exists, return the room object
  if (currRoomObj[direction]) {
    return rooms[currRoomObj[direction]];
  } else {
    // if no room connected, get a new room, link doors, add items and monster
    let randNum = Math.floor((Math.random() * rooms.availableRooms.length));
    const roomArray = rooms.availableRooms.splice(randNum, 1);   // remove the room name from the array of names
    const newRoomObj = roomArray[0];
    roomMethods.linkRooms(currRoomObj, newRoomObj, direction);
    roomMethods.addItemWeapons(newRoomObj);
    roomMethods.addMonster(newRoomObj);

    return newRoomObj;
  }
};

export default roomMethods;
