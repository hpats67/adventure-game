//import room from '../models/roomMethods';
import rooms from '../models/rooms';

roomController.$inject = ['$scope'];

export default function roomController($scope) {
  $scope.roomTitle = rooms.Foyer.name;
  $scope.roomDescription = rooms.Foyer.description;
}
