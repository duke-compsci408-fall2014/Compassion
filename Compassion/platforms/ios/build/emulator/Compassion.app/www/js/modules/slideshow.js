
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

.controller('SlideshowCtrl', ['$scope', '$http', '$ionicSideMenuDelegate', '$window', function($scope, $http, $ionicSideMenuDelegate, $window) {

 $http.get('js/modules/data/data.json').success(function(data){
      $scope.artifacts = [];
      for(i =0; i<data.length; i++){
      	for(j = 0; j<data[i].artifacts.length; j++){
      		$scope.artifacts[$scope.artifacts.length] = angular.fromJson(data[i].artifacts[j]);
      	}
      }
  });
  

 $scope.setWidth = function() {
  return { "width": $window.innerWidth+'px' };
 };

  $scope.setCaptionWidth = function() {
  return { "width": $window.innerWidth+'px' };
 };

  $scope.setWidthAndHeight = function() {
  return { "width": $window.innerWidth+'px',"height": $window.innerHeight-46+'px' };
 };

 $scope.currentIndex = 0;

 $scope.slideHasChanged = function(index) {
  $scope.currentIndex = index;
 };

 $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
  };

 $ionicSideMenuDelegate.canDragContent(false);
 
 
}]);

      

