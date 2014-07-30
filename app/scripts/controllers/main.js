'use strict';

/**
 * @ngdoc function
 * @name proveAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proveAngularApp
 */
angular.module('proveAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
