
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
    
 $http.get("js/modules/data/data.json").success(function(data){
     $scope.artifacts = [];
     offset = 0; 
     for(i =0; i<data.length; i++){
        for(j =0; j<data[i].artifacts.length; j++){
              $scope.artifacts[offset] = data[i].artifacts[j]; 
              offset++; 
        }
     }

     console.log("offset: "+offset);
 });

 $scope.settings = {};
 $scope.settings.myFilter = "name";

 $scope.isIdFilter = function() {
    return $scope.settings.myFilter == 'id';
 };
});