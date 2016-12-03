import roomMethods from '../models/roomMethods';
import character from '../models/character';
import charMethods from './characterMethods';
import monsterMethods from './monsterMethods';
import gameMethods from './gameMethods';

gameController.$inject = ['$scope'];

export default function gameController($scope) {

  //when door is clicked
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currLocation = roomMethods.getRoom(currRoom, direction);
  };

  //when inventory button is clicked
  $scope.useInvItem = function(item, currRoom) {
    //check if monster is in room
    const isMonster = charMethods.check4Monster(currRoom);
    if (item.type === 'weapon') {

      if (isMonster) {
        charMethods.battleMonster(item);
      }else{
        alert('I\'m sorry, you can\'t use that item in this room.');
      }

    }else if (item.type === 'item') {
      charMethods.useItem(item);

      if (isMonster) {
        //monster attacks character
        charMethods.hitCharacter(monster);
      }
    }
  };
  
}

charMethods.check4Monster = function(room) {
  //for loop to check each cell for a monster
  return boolean
};

charMethods.battleMonster = function(item, monster) {
  //check if matches monster weakness
  if (item.name === monster.weakness) {
    //remove item from inventory
    //remove monster from room square in room obj
    monsterMethods.bury(monster);
  }else{
    charMethods.hitCharacter(monster);
  }
};

charMethods.hitCharacter = function(monster) {
  character.hp -= monster.attack;
  if (character.hp <= 0) {
    gameMethods.endOfGame(); //do i have to pass the graveyard into this?
  }
};

gameMethods.endOfGame = function() {
  //mutates and displays graveyard
  //is graveyard always hidden and then this function displays it?
};