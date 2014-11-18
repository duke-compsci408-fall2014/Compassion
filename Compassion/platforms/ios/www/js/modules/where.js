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
.controller('MapCtrl', function($scope, $ionicLoading, $http) {
      $http.get('js/modules/data.json').success(function(data){ 
            $scope.location = data[0].artifacts[0].location; 
            console.log($scope.location); 

      }); 
        
});