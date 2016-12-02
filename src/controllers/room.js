//import room from '../models/roomMethods';
import rooms from '../models/rooms';
import itemMethods from '../models/itemMethods';

roomController.$inject = ['$scope'];

export default function roomController($scope) {
  let itemObject = itemMethods.get();

  $scope.roomTitle = rooms.Foyer.name;
  $scope.roomDescription = rooms.Foyer.description;
  $scope.itemDescription = itemObject.description;
  $scope.itemName = itemObject.name;
}
