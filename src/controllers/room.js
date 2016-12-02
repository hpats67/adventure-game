import roomMethods from '../models/roomMethods';
import rooms from '../models/rooms';
import itemMethods from '../models/itemMethods';
import monsterMethods from '../models/monsterMethods';

roomController.$inject = ['$scope'];

export default function roomController($scope) {
  // let itemObjArr = itemMethods.get();
  // let monsterObject = monsterMethods.get();

  // $scope.roomTitle = rooms.Foyer.name;
  // $scope.roomDescription = rooms.Foyer.description;
  // // $scope.itemDescription = itemObject.description;
  // // $scope.itemName = itemObject.name;
  // $scope.items = itemObjArr;
  // $scope.monsterDescription = monsterObject.description;
  // $scope.monsterName = monsterObject.name;
  $scope.getRoom = roomMethods.getRoom;

}
