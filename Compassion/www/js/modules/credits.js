
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
       $http.get("js/modules/data.json").success(function(data){
         $scope.credits = data[5]; 
           console.log($scope.credits); 
      })
  
});


