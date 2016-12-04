import roomMethods from '../models/roomMethods';
import gameMethods from './gameMethods';

gameController.$inject = ['$scope'];

export default function gameController($scope) {

  //when door is clicked
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currLocation = roomMethods.getRoom(currRoom, direction);
  };

  //when inventory button is clicked
  $scope.useInvItem = gameMethods.useInvItem;
  
}