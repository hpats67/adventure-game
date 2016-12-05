import roomMethods from '../models/roomMethods';
import rooms from '../models/rooms';
import gameMethods from '../models/gameMethods';
import charMethods from '../models/characterMethods';
import character from '../models/character';

gameController.$inject = ['$scope'];

export default function gameController($scope) {
  $scope.characterHealth = character.hp;
  $scope.currentRoom = rooms.Foyer;
  $scope.inventory = character.inventory;
  $scope.roomInv = rooms.Foyer.inventory;

  //when door is clicked
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currentRoom = roomMethods.getRoom(currRoom, direction);
  };

  $scope.monsterClick = function(monster) {
    gameMethods.hurtCharacter(monster);
    $scope.characterHealth = character.hp;
  };

  $scope.itemClick = function(item, roomAreaNum, currRoom) {
    charMethods.pickUpItem(item, currRoom);
    $scope.roomInv = currRoom.inventory;
    $scope.inventory = character.inventory;
    $scope.currentRoom[roomAreaNum] = {};
  };

}
