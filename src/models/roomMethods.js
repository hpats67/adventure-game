let rooms = require('./rooms');
let monsterMethods = require('./monsterMethods');
let itemMethods = require('./itemMethods');

const roomMethods = {};


roomMethods.addMonster = function() {
// 40% chance of monster
  let monsterChance = Math.random();
  if (monsterChance > .60) {
    // put a monster in
  }
};


roomMethods.addItem = function() {
// 60% chance of item - if over 90% 2 items appear
  let itemChance = Math.random();
  if (itemChance > .90) {
    // put two items in
  } else if (itemChance > .60) {
    // put one item in
  }
};

roomMethods.getRoom = function(room, direction) {

  if (room[direction]) { // the room already exists
    // return the room name
  }

};


roomMethods.linkRooms = function(startRoom, newRoom, directionTraveled) {

  // link a rooms N to new room's S, etc

};


