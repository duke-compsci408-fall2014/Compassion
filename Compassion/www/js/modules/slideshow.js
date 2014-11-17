
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

 $http.get('js/modules/data.json').success(function(data){
      console.log(angular.fromJson(data)[3]);
      $scope.artifacts = angular.fromJson(data)[3];
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

      

