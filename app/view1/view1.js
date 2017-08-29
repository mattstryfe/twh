'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  var self = this;

  self.items = ['item1', 'item2', 'item3'];
  self.test1 = "test1";
  console.log('test1', self.test1)
}]);