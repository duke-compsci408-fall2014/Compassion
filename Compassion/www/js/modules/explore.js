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

.service('Data', function(){
    return [
      { title: 'Image', id: 1, img_path: 'img/theme_1.png' },
      { title: 'Pilgrimage', id: 2, img_path: 'img/theme_2.png' },
      { title: 'Practice', id: 3, img_path: 'img/theme_3.png' },
  ];
})
        
        
.controller('ExploreCtrl', function($scope, Data) {
  $scope.themes = Data;
});

