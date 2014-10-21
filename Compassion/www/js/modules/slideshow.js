
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

$scope.slideshow = [{
    path: "/img/explore_background.jpg",
    id: 1,
    caption: "Caption A"
  }, {path: "/img/explore_background.jpg",
    id: 2,
    caption: "CaptionCaptionCaptionCaptionCaptionCaptionCaptionCaptionCaption"
  }, {path: "/img/explore_background.jpg",
    id: 3,
    caption: "Another caption"
  }];

});

