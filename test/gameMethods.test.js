import angular from 'angular';
import chai from 'chai';

//what does this syntax mean?
const {assert} = chai;

describe('the useInvItem method', () => {

  beforeEach(angular.mock.module('game'));

  let $game;
  let $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$game_) {
    $scope = $rootScope.new();
    $game = _$game_;
  }));

  it('hurts character if attacked by monster', () => {
    assert;
  });

  it('displays graveyard when character loses all hp', () => {
    assert /* when char.hp === 0 then char.isDead === true */;
  });



});