'use strict';

// Declare app level module which depends on views, and components
var myapp=angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.showrelation',
  'myApp.addmember',
  'myApp.updaterelation',
  'myApp.version',
  'ngResource'
  
])
myapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


myapp.factory('dataFactory', ['$http', function($http) {

    
    var dataFactory = {};


    /*Store Functions */
    
    dataFactory.addmember = function (Data) {

      return $http({
           method: "POST",
           url: 'http://api.task.local/addmember',
           data:Data
           });
         };

    dataFactory.showrelation = function (dat) {

       return $http({
           method: "POST",
            url: 'http://api.task.local/showrelation',
            data:dat
            });
         };

      dataFactory.getlatest = function (idd) {

      return $http({
           method: "POST",
           url: 'http://api.task.local/getlatest',
           data:idd
           });
         };

    dataFactory.updaterelation = function (jsonData) {

      return $http({
           method: "POST",
           url: 'http://api.task.local/updaterelation',
           data:jsonData
           });
         };

   

    return dataFactory;
 }]);