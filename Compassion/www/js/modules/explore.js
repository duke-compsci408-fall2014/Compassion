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
      var themes = [data[0], data[1], data[2]]; 
     
          console.log(themes); 
     
      $scope.themes = angular.fromJson(themes); 
  })
}]  
            
);

