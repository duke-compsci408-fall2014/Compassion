
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
.controller('searchArtifactsCtrl', function($scope, $stateParams) {
  $scope.artifacts = [
  { name: 'artifact 1', imageURL:'../img/explore_background.jpg', id: 1 },
  { name: 'artifact 2', imageURL:'../img/explore_background.jpg', id: 2 },
  { name: 'artifact 3', imageURL:'../img/explore_background.jpg', id: 3 },
  ];
})
;


