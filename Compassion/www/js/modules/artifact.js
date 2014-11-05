
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.artifactFullScreen', {
        url: "/artifacts/:artifactId",
        views: {
          'menuContent' :{
            templateUrl: "templates/artifact/full_screen.html",
            controller: 'ArtifactCtrl'
          }
        }
      })
      .state('app.singleArtifactIntermediate', {
        url: "/artifacts/caption/:artifactId",
        views: {
          'menuContent' :{
            templateUrl: "templates/artifact/intermediate.html",
            controller: 'ArtifactCtrl'
          }
        }
      })
      .state('app.singleArtifactDetails', {
        url: "/artifacts/details/:artifactId",
        views: {
          'menuContent' :{
            templateUrl: "templates/artifact/details.html",
            controller: 'ArtifactCtrl'
          }
        }
      });
  })
  .controller('ArtifactCtrl', function($scope, $stateParams, $http) {
    $scope.curArtId = $stateParams.artifactId;
    $scope.tab = 1;
    $scope.overlay = true;
    $scope.toggleOverlay = function() {
      $scope.overlay = !$scope.overlay;
    };

    $scope.goBack = function() {
      window.history.back();
    };
        
    $http.get('js/modules/data.json').success(function(data){
     $scope.imageURL = data[3][$stateParams.artifactId - 1].imageURL;
     $scope.artifactName = data[3][$stateParams.artifactId -1].name; 
    });

  })

;

