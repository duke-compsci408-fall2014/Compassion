angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.artifactFullScreen', {
        url: "/artifacts/category/:catId/:artifactId",
        views: {
          'menuContent': {
            templateUrl: "templates/artifact/full_screen.html",
            controller: 'ArtifactCtrl'
          }
        }
      })
      .state('app.singleArtifactIntermediate', {
        url: "/artifacts/caption/:artifactId",
        views: {
          'menuContent': {
            templateUrl: "templates/artifact/intermediate.html",
            controller: 'ArtifactCtrl'
          }
        }
      })

    .state('app.singleArtifactDetails', {
      url: "/artifacts/details/:artifactId",
      views: {
        'menuContent': {
          templateUrl: "templates/artifact/details.html",
          controller: 'ArtifactCtrl'
        }
      }
    })

  })


.controller('ArtifactCtrl', function($scope, $stateParams, $http, $sce) {
  $scope.curArtId = $stateParams.artifactId;
  $scope.themeId = $stateParams.catId;

  $scope.tab = 1;
  $scope.overlay = true;
  $scope.toggleOverlay = function() {
    $scope.overlay = !$scope.overlay;
  };

  $scope.goBack = function() {
    //window.history.back();

  };


  $http.get('js/modules/data/data.json').success(function(data) {
    $scope.artifacts = [];

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < data[i].artifacts.length; j++) {
        $scope.artifacts[$scope.artifacts.length] = angular.fromJson(data[i].artifacts[j]);
      }
    }

    $scope.imageURL = $scope.artifacts[$stateParams.artifactId - 1].imageURL;
    $scope.artifactName = $scope.artifacts[$stateParams.artifactId - 1].name;
    $scope.artifactText = $scope.artifacts[$stateParams.artifactId - 1].text;
    $scope.artifactCaption = $scope.artifacts[$stateParams.artifactId - 1].caption;
    $scope.comparativeImages = $scope.artifacts[$stateParams.artifactId - 1].comparativeImages;
    //sconsole.log($scope.comparativeImages); 
    $scope.audioUrl = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.artifactId - 1].audio);
    $scope.playlist = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.artifactId - 1].audio2);
    //  $scope.video = data[0].artifacts[$stateParams.artifactId -1].video;
    $scope.location = $scope.artifacts[$stateParams.artifactId - 1].location;
  });

})

;