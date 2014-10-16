
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
.controller('SlideshowCtrl', function($scope, $ionicSlideBoxDelegate){
 $scope.nextSlide = function () {
  $ionicSlideBoxDelegate.next();
};

});

