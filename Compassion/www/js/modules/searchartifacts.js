
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.searchArtifacts', {
      url: "/searchArtifacts",
      views: {
        'menuContent' :{
          templateUrl:'templates/searchArtifacts.html', 
          controller: 'searchArtifactsCtrl'    
        }
      }
    });
  })
.controller('searchArtifactsCtrl', function($scope, $stateParams, $http) {
    
 $http.get("js/modules/data.json").success(function(data){
     $scope.artifacts = data[3];    
 })

})
;


