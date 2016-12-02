import rooms from '../models/rooms';
import itemMethods from '../models/itemMethods';
import character from '../models/characterMethods';


characterController.$inject = ['$scope'];

export default function characterController($scope) {
  $scope.characterName = character.name();



}