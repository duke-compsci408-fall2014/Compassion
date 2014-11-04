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
      
        
.controller('ExploreCtrl', ['$scope', '$http', function($scope, $http){    
  $http.get('/js/modules/data.json').success(function(data){    
      console.log(angular.fromJson(data)[1].artifacts); 
      $scope.themes = angular.fromJson(data); 
  })
}]  
            
);

