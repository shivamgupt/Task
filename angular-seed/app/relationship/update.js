'use strict';

angular.module('myApp.updaterelation', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/update/:id', {
    templateUrl: 'relationship/update.html',
    controller: 'updateCtrl'
  });
}])


.controller('updateCtrl', ['$scope', '$routeParams','dataFactory',
    function ($scope,$routeParams,dataFactory) {


     $scope.result;
     var id=$routeParams.id;
     $scope.member_name='';
     $scope.relative_name='';
     $scope.relationship='';
       
     
      getlatest();

      $scope.updaterelation=function updaterelation() {
     
     
      var jsonData = JSON.stringify({
                                    id:id,member_name:$scope.member_name,relative:$scope.relative_name,relation:$scope.relationship});
   
    
     dataFactory.updaterelation(jsonData).success(function (response) {

              $scope.results = response;
              alert("Updated Succesfully");
          });
   }


    function getlatest(){

     var idd= JSON.stringify({id:id});
      dataFactory.getlatest(idd).success(function (response) {

             $scope.latest = response;
             response.forEach(function(latest)
              {
                
             $scope.member_name=latest.member_name;
             $scope.relative_name=latest.relative;
             $scope.relationship=latest.relationship;

              });

              

          });
        
    }


       
         


    }]);