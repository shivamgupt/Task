'use strict';

angular.module('myApp.addmember', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addmember', {
    templateUrl: 'relationship/add.html',
     controller: 'addCtrl'
    
  });
}])


.controller('addCtrl', ['$scope','dataFactory','$http',
       function ($scope,dataFactory,$http) {
      
         $scope.result='';
         $scope.member_name='';
         $scope.relative_name='';
          $scope.relationship='';

   
        $scope.addmember=function addmember() {
        var Data = JSON.stringify({
        member_name:$scope.member_name,relative:$scope.relative_name,relation:$scope.relationship});
     
        dataFactory.addmember(Data).success(function (response) {

              $scope.result = response;
          });
      }

         $scope.reset=function reset(){
          $scope.member_name="";
          $scope.relative_name="";
          $scope.relationship="";
          $scope.result="";
            }


    /*
           function del(id){
           var dataa=JSON.stringify({ id:id });
           return $http({ method: "POST",url: 'http://jntoolapi.local/delete-enquiry', data: dataa});
           }


 
           $scope.notify=function notify(id){
            del(id).success(function () {
             $scope.enquiries="";
            alert("Sucessfully deleted");
           });
       }


*/



        }]);


