import charChange from '../models/gameMethods';
import character from '../models/character';


characterController.$inject = ['$scope'];

export default function characterController($scope) {
  $scope.characterName = character.name;
  $scope.characterHealth = character.hp;
  $scope.inventory = character.inventory;

  $scope.changeName = function() {
    if($scope.text) {
      $scope.characterName = $scope.text;
      $scope.submitted = true;
    }
  };

  $scope.useInv = function(item, currRoom) {
    charChange.useInvItem(item, currRoom);
    $scope.characterHealth = character.hp;
  }; 



}