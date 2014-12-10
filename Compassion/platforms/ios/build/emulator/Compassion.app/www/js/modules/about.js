
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

       $http.get("js/modules/data/about.json").success(function(data){
          $scope.about = []; 

          for(var i = 0; i<data.length; i++){
            $scope.about[i] = angular.fromJson(data[i]);
            console.log($scope.about[i])
          }
      }); 
});
;

