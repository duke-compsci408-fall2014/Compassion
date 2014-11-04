
angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
  .state('app.slideshow', {
    url: "/slideshow",
    views: {
      'menuContent' :{
        templateUrl: "templates/slideshow.html",
        controller: 'SlideshowCtrl'
      }
    }
  });
})

.controller('SlideshowCtrl', ['$scope', '$http', function($scope, $http) {

 $http.get('/js/modules/data.json').success(function(data){    
      console.log(angular.fromJson(data)[3]); 
      $scope.artifacts = angular.fromJson(data)[3]; 
  })
}]);

      

