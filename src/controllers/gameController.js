import roomMethods from '../models/roomMethods';
import rooms from '../models/rooms';
import gameMethods from '../models/gameMethods';
import character from '../models/character';

gameController.$inject = ['$scope'];

export default function gameController($scope) {
  $scope.characterHealth = character.hp;
  $scope.currentRoom = rooms.Foyer;

  //when door is clicked
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currentRoom = roomMethods.getRoom(currRoom, direction);
  };

  $scope.monsterClick = function(monster) {
    console.log(monster)
    gameMethods.hurtCharacter(monster);
    $scope.characterHealth = character.hp;
  };

  //when inventory button is clicked
  $scope.useInvItem = gameMethods.useInvItem;
  
}