import gameMethods from '../models/gameMethods';

gameController.$inject = ['$scope'];

export default function gameController($scope) {
  $scope.changeRoom = gameMethods.changeRoom;
  $scope.currentRoom = 
}