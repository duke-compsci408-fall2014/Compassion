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
  { title: 'theme 1', id: 1, img_path: '../../img/theme_1.png' },
  { title: 'theme 2', id: 2, img_path: '../../img/theme_2.png' },
  { title: 'theme 3', id: 3, img_path: '../../img/theme_3.png' },
  ];
});

