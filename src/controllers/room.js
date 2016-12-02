//import room from '../models/roomMethods';
import rooms from '../models/rooms';
import itemMethods from '../models/itemMethods';
import monsterMethods from '../models/monsterMethods';

roomController.$inject = ['$scope'];

export default function roomController($scope) {
  let itemObject = itemMethods.get();
  let monsterObject = monsterMethods.get();

  $scope.roomTitle = rooms.Foyer.name;
  $scope.roomDescription = rooms.Foyer.description;
  $scope.itemDescription = itemObject.description;
  $scope.itemName = itemObject.name;
  $scope.monsterDescription = monsterObject.description;
  $scope.monsterName = monsterObject.name;


}
