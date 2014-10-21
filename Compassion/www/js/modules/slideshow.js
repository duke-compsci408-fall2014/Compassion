
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
.controller('SlideshowCtrl', function($scope, $stateParams) {
  $scope.artifacts = [
  { name: 'artifact 1', imageURL:'../img/explore_background.jpg', id: 1 },
  { name: 'artifact 2', imageURL:'../img/loading_back.png', id: 2 },
  ];
})
;

