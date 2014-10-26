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
        {title: 'theme 1', id: 1}, 
        {title: 'theme 2', id: 2},
        {title: 'theme 3', id: 4},    
    ]; 
})
        
        

.controller('ExploreCtrl', function($scope, Data) {
  $scope.themes = Data; 
});

