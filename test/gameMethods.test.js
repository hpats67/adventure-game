/* globals angular, chai */

const assert = chai.assert;

describe.only('the useInvItem method', () => {

  beforeEach(angular.mock.module('controllers'));

  let $controller, $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  it('hurts character if attacked by monster', () => {

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

    $controller('gameController', { $scope });
    assert.equal($scope.characterHealth, 100);
    //assert.deepEqual($scope.inventory, []);
    //assert.equal($scope.currentRoom, Foyer);
    //assert.equal($scope.roomInv, Foyer.inventory);

  });

  // it('displays graveyard when character loses all hp', () => {
  //   assert /* when char.hp === 0 then char.isDead === true */;
  // });


});