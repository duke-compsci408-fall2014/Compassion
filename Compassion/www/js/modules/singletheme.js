
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
.controller('ThemeCtrl', function($scope, $stateParams) {
  $scope.currentTheme = $stateParams.themeId;
  $scope.artifacts = [
  { name: 'artifact 1', id: 1 },
  { name: 'artifact 2', id: 2 },
  { name: 'artifact 3', id: 3 },
  ];
})
;

