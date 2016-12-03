import roomMethods from '../models/roomMethods';
import rooms from '../models/rooms';

gameController.$inject = ['$scope'];

export default function gameController($scope) {
  $scope.currentRoom = rooms.Foyer;
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currentRoom = roomMethods.getRoom(currRoom, direction);
    
  };
  
}