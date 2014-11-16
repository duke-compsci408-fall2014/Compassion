
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html", 
          controller: "aboutCtrl"
        }
      }
    });
  })

.controller('aboutCtrl', function($scope, $http) {
       $http.get("js/modules/data.json").success(function(data){
         $scope.about = data[6]; 
      })
  
});
;

