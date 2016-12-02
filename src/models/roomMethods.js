let rooms = require('./rooms');
let monsterMethods = require('./monsterMethods');
let itemMethods = require('./itemMethods');

const roomMethods = {};


roomMethods.addMonster = function(room) {
// 40% chance of monster landing randomly in one cell in the room
  let monsterChance = Math.random();
  if (monsterChance < .40) {
    let randomCell = Math.floor((Math.random() * 9) + 1); // between 1-9
    while (room['roomArea'+randomCell]) { // if there's something in the cell, do-over
      randomCell = Math.floor((Math.random() * 9) + 1);
    }
    room['roomArea' + randomCell] = monsterMethods.get();  // returns a monster
  }
};

roomMethods.addItem = function(room) {
// 60% chance of item - if over 90% 2 items appear
  var randomCell;
  let itemChance = Math.random();
  if (itemChance > .90) {
    for (let i = 0; i < 2; i++) {
      randomCell = Math.floor((Math.random() * 9) + 1); // between 1-9
      while (room['roomArea' + randomCell]) { // if there's something in the cell, do-over
        randomCell = Math.floor((Math.random() * 9) + 1);
      }
      room['roomArea' + randomCell] = itemMethods.get();  // returns an item
    }
  } else if (itemChance > .60) {
    randomCell = Math.floor((Math.random() * 9) + 1);
    while (room['roomArea' + randomCell]) {
      randomCell = Math.floor((Math.random() * 9) + 1);
    }
    room['roomArea' + randomCell] = itemMethods.get();
  }
};

roomMethods.getRoom = function(room, direction) {
// Return if the room exists, if not add it
  if (room[direction]) { // the room already exists
    return room[direction];
  } else {
    let randNum = Math.floor((Math.random() * rooms.availableRooms.length));
    const roomName = rooms.availableRooms.splice(randNum, 1);   // remove the room name from the array of names
    const newRoom = rooms[roomName];
    roomMethods.linkRooms(room, newRoom, direction);
    return newRoom;
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


