import roomMethods from '../models/roomMethods';
import character from '../models/character';
import charMethods from './characterMethods';


gameController.$inject = ['$scope'];

export default function gameController($scope) {
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currLocation = roomMethods.getRoom(currRoom, direction);
  };

  //click on inventory button, call useInvItem(pass in button name or obj)
  $scope.useInvItem = function(item, currRoom) {
    //if item is weapon then
    if (item.type === 'weapon') {
      //check if monster present
      charMethods.check4Monster(currRoom)
        //if not present alert("you can't use that item here")
        //else if present
        charMethods.battleMonster(item)
    //if item is item then
    }else if (item.type === 'item'){
      //call useItem(pass in item)
      charMethods.useItem(item);
      //check if monster present
      charMethods.check4Monster(currRoom)
      //for loop to check each cell for a monster
        //if not present
          //update hp
          //if hp <= 0 call endOfGame(graveyard)
        //if present 
            //monster attacks character
            charMethods.hitCharacter(monster)
            //take damage off character
              //update hp
              //if hp <= 0 call endOfGame(graveyard)
  };
  
}

charMethods.check4Monster = function(room) {
  //for loop to check each cell for a monster
  return boolean
};

charMethods.battleMonster = function(item) {
  //check if matches monster weakness
    //if match
      //remove item from inventory
      //remove monster from room square in room obj
      //add monster to graveyard
    //else if not match
      //monster attacks character
      charMethods.hitCharacter(monster)
      //take damage off character
        //update hp
        //if hp <= 0 call endOfGame(graveyard)
};

charMethods.hitCharacter = function(monster) {

};

charMethods.check4Monster = function() {

};