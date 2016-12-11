/* globals angular, chai */

const assert = chai.assert;

describe.only('the characterController', () => {

  let $controller, $scope;

  beforeEach(angular.mock.module('controllers'));

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  
})