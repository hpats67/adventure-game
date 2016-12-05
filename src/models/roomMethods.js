import rooms from './rooms';
import monsterMethods from './monsterMethods';
import itemMethods from './itemMethods';
import weaponMethods from './weaponMethods';

const roomMethods = {};

roomMethods.addMonster = function(roomObj) {
// 40% chance of monster landing randomly in one cell in the room
  let monsterChance = Math.random();
  if (monsterChance < .40) {
    roomObj.monster = monsterMethods.get();  // returns a monster
  }
  return monsterChance;
};

roomMethods.addItemWeapons = function(roomObj) {
// 70% chance of a weapon - if over %75 an item also appears
  var randomCell;
  let itemChance = Math.random();

  // if an ok roll, you just get a weapon
  if (itemChance > .30) {
    randomCell = Math.floor((Math.random() * 8) + 1);
    roomObj['roomArea' + randomCell] = weaponMethods.get();
  } else if (itemChance > .75) {  // if a really good roll -- you also get an item
    randomCell = Math.abs(randomCell - 3);
    roomObj['roomArea' + randomCell] = itemMethods.get();  // returns an item
  }
};

roomMethods.linkRooms = function(startRoom, newRoom, directionTraveled) {
// link a rooms N to new room's S, etc
  switch (directionTraveled) {
  case 'northDoor':
    startRoom.northDoor = newRoom.name;
    newRoom.southDoor = startRoom.name;
    break;
  case 'southDoor':
    startRoom.southDoor = newRoom.name;
    newRoom.northDoor = startRoom.name;
    break;
  case 'eastDoor':
    startRoom.eastDoor = newRoom.name;
    newRoom.westDoor = startRoom.name;
    break;
  case 'westDoor':
    startRoom.westDoor = newRoom.name;
    newRoom.eastDoor = startRoom.name;
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
    const newRoomName = roomArray[0];
    const newRoomObj = rooms[newRoomName];
    roomMethods.linkRooms(currRoomObj, newRoomObj, direction);
    // roomMethods.addItemWeapons(newRoomObj);
    roomMethods.addMonster(newRoomObj);

    return newRoomObj;
  }
};

export default roomMethods;

