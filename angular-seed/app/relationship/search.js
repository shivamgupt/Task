'use strict';

angular.module('myApp.showrelation', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/showrelation', {
    templateUrl: 'relationship/search.html',
     controller: 'searchCtrl'
  });
}])


.controller('searchCtrl', ['$scope','dataFactory','$http',
       function ($scope,dataFactory,$http) {
      
         
        

   
        $scope.showrelation=function showrelation() {
        var dat = JSON.stringify({
        member_name:$scope.member_name,relative:$scope.relative_name});
     
        dataFactory.showrelation(dat).success(function (response) {

              $scope.relatives = response;
          });
      }

         $scope.reset=function reset(){
          $scope.member_name="";
          $scope.relative_name="";
          $scope.relationship="";

            }

         function del(id){
           var dataa=JSON.stringify({ id:id });
           return $http({ method: "POST",url: 'http://api.task.local/deletemember', data: dataa});
           }


 
           $scope.notify=function notify(id){
            del(id).success(function () {
              $scope.relatives="";
            $scope.member_name="";
            $scope.relative_name="";
            $scope.relationship="";
            alert("Sucessfully deleted");
           });
       }
    
        


        }]);


