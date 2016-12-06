import charChange from '../models/gameMethods';
import character from '../models/character';
import monster from '../models/monsters';


characterController.$inject = ['$scope'];

export default function characterController($scope) {
  $scope.characterName = character.name;
  $scope.graveyard = monster.graveyard;

  $scope.changeName = function() {
    if($scope.text) {
      $scope.characterName = $scope.text;
      $scope.submitted = true;
    }
  };

  $scope.useInv = function(item, currRoom) {
    charChange.useInvItem(item, currRoom);
    $scope.characterHealth = character.hp;
    $scope.charDeath = character.isDead;
    console.log($scope.charDeath);
    $scope.graveyard = monster.graveyard;
  }; 





}