import roomMethods from '../models/roomMethods';

gameController.$inject = ['$scope'];

export default function gameController($scope) {
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currLocation = roomMethods.getRoom(currRoom, direction);
  };
  
}