
angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
  .state('app.singleTheme', {
    url: "/themes/:themeId",
    views: {
      'menuContent' :{
        templateUrl: "templates/theme.html",
        controller: 'ThemeCtrl'
      }
    }
  });
})
.controller('ThemeCtrl', function($scope, $stateParams, Data) {
  $scope.currentTheme = $stateParams.themeId;
  $scope.artifacts = [
  { name: 'artifact 1', imageURL:'../img/explore_background.jpg', id: 1 },
  { name: 'artifact 2', imageURL:'../img/explore_background.jpg', id: 2 },
  { name: 'artifact 3', imageURL:'../img/explore_background.jpg', id: 3 },
  ];
})
;

