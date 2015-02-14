
angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
  .state('app.slideshow', {
    url: "/slideshow",
    views: {
      'menuContent' :{
        templateUrl: "templates/theme copy.html",
        controller: 'SlideshowCtrl'
      }
    }
  });
})

.controller('SlideshowCtrl', ['$scope', '$http', '$ionicSideMenuDelegate', '$window', function($scope, $http, $ionicSideMenuDelegate, $window) {

 $http.get('js/modules/data/data.json').success(function(data){
      $scope.artifacts = [];
      for(i =0; i<data.length; i++){
      	for(j = 0; j<data[i].artifacts.length; j++){
      		$scope.artifacts[$scope.artifacts.length] = angular.fromJson(data[i].artifacts[j]);
      	}
      }
  });

 
}]);

      

