
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.credits', {
      url: "/credits",
      views: {
        'menuContent' :{
          templateUrl: "templates/credits.html",
          controller: "creditsCtrl"
        }
      }
    });
  })

.controller('creditsCtrl', function($scope, $http) {
       $http.get("js/modules/data/credits.json").success(function(data){
         $scope.credits = [];
         for(i = 0; i<data.length; i++){
          $scope.credits[i] = data[i]; 
         } 
      })
  
});


