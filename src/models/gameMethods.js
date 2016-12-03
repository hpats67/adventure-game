import roomMethods from './roomMethods';
import charMethods from './characterMethods';
import character from './character';

const gameMethods = {};

gameMethods.hurtCharacter = function(monster) {
  character.hp -= monster.attack;
  if (character.hp <= 0) {
    gameMethods.endOfGame();
  }
};

gameMethods.endOfGame = function() {
  //change boolean then ng-show the element on index.html that shows the graveyard
  //where does this live on index.html? in the <tag> that holds the inventory?
  character.isCharDead = true;
};

gameMethods.useInvItem = function(item, currRoom) {
  //check if monster is in room
  const isMonster = roomMethods.check4Monster(currRoom);
  if (item.type === 'weapon') {

    if (isMonster) {
      charMethods.battleMonster(item, monster);
    }else{
      alert('I\'m sorry, you can\'t use that item in this room.');
    }

  }else if (item.type === 'item') {
    charMethods.useItem(item);

    if (isMonster) {
      //monster attacks character
      gameMethods.hurtCharacter(monster);
    }
  }
};

export default gameMethods;