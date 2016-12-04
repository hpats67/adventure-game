import angular from 'angular';

import game from 'game';
import room from './room';

// create the module for controllers
const controllers = angular.module('controllers', []);

controllers.controller('roomController', room);
controllers.controller('gameController', game);

export default controllers.name;