angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
  .state('app.explore', {
    url: "/explore",
    views: {
      'menuContent' :{
        templateUrl: "templates/explore.html",
        controller: 'ExploreCtrl'
      }
    }
  });
})

.controller('ExploreCtrl', function($scope) {
  $scope.themes = [
  { title: 'theme 1', id: 1 },
  { title: 'theme 2', id: 2 },
  { title: 'theme 3', id: 3 },
  ];
});

