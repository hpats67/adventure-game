/* globals angular, chai */

const assert = chai.assert;

describe.only('the gameController', () => {

  beforeEach(angular.mock.module('controllers'));

  let $controller, $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  let Foyer = { name: 'Foyer',
    description: 'You\'re in the entry of a large, old house. More of a mansion, really. ' +
    'It looks like no one has kept up with cleaning or repairs in a long time, dust and ' +
    'cobwebs cover every surface, some of the furniture is draped in dingy once-white sheets.' +
    'There doesn\'t seem to be anyone here, might as well take a look around.',
    inventory: [], monster: false,
    roomArea1: {}, roomArea2: {}, roomArea3: {}, roomArea4: {},
    roomArea5: {}, roomArea6: {}, roomArea7: {}, roomArea8: {},
    northDoor: '', southDoor: '', eastDoor: '', westDoor: '',
  };

  it('properly loads Foyer as the starting room', () => {

    $controller('gameController', { $scope });
    // The game should initialize with the first room as Foyer and full health
    assert.equal($scope.characterHealth, 100);
    assert.deepEqual($scope.inventory, []);
    assert.deepEqual($scope.currentRoom, Foyer);
    assert.deepEqual($scope.roomInv, Foyer.inventory);

  });

  it('loads a new room', () => {

    $controller('gameController', { $scope });
    // It should load Foyer as the first room
    assert.deepEqual($scope.currentRoom, Foyer);
    // It should change rooms
    $scope.changeRoom(Foyer, 'northDoor');
    // The new room should have a name that is _not_ Foyer
    assert.isOk($scope.currentRoom.name);
    assert.notEqual($scope.currentRoom.name, 'Foyer');

  });


  it('hurts the character when a monster is clicked', () => {

    let monster = { name: 'Monster', description: 'Super scary monster', attack: 10 };

    $controller('gameController', { $scope });
    assert.equal($scope.characterHealth, 100);
    $scope.monsterClick(monster);
    assert.equal($scope.characterHealth, 90);
    $scope.monsterClick(monster);
    assert.equal($scope.characterHealth, 80);

  });


});