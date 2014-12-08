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
  $http.get('js/modules/data/data.json').success(function(data){ 
      $scope.themes = [];  
      for(i = 0; i<data.length; i++){
        $scope.themes[i] = angular.fromJson(data[i]); 
      }
       
  })
}]  
            
);

