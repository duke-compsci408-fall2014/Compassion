angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
  .state('app.where', {
        url: "/artifacts/details/:artifactId/where",
        views: {
          'menuContent' :{
            templateUrl: "templates/artifact/where.html",
            controller: 'MapCtrl'
          }
        }
      });
})
.controller('MapCtrl', function($scope, $ionicLoading, $http, $stateParams) {
      $http.get('js/modules/data.json').success(function(data){ 
      	
      $scope.artifacts = [];
      $http.get('js/modules/data.json').success(function(data){  	
      		for(var i =0; i<3; i++){
      			for(var j = 0; j<data[i].artifacts.length; j++){
      				$scope.artifacts[$scope.artifacts.length] = angular.fromJson(data[i].artifacts[j]);
      		}
      	}
      
      $scope.location = $scope.artifacts[$stateParams.artifactId -1].location; 
      
      }); 
        
});
    })