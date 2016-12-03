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
  //TODO: on end of game share the graveyard
  //when dead = true use ng-show on the element on index.html that shows the graveyard
  //where does this live on index.html? in the <tag> that holds the inventory?
  character.isCharDead = true;
};

gameMethods.useInvItem = function(item, currRoom) {
  //check if monster is in room
  const monsterCheck = roomMethods.check4Monster(currRoom);
  const monster = monsterCheck.monster;
  
  //do i need to check which square the item is on to remove it on use?
  //i did check which square the monster is on and pass it on?
  //does deleting the object off the room object remove it from the room view?

  if (item.type === 'weapon') {

    if (monsterCheck.isMonster) {
      charMethods.battleMonster(item, monster);
    }else{
      alert('I\'m sorry, you can\'t use that item in this room.');
    }

  }else if (item.type === 'item') {
    charMethods.useItem(item);

    if (monsterCheck.isMonster) {
      //monster attacks character
      gameMethods.hurtCharacter(monster);
    }
  }
};

export default gameMethods;