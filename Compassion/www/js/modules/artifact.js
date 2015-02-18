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


.controller('ArtifactCtrl', function($scope, $stateParams, $http, $sce, $cordovaSocialSharing) {
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

  $scope.shareAnywhere = function(){ 
    $cordovaSocialSharing.share("This is your message", "This is your subject", "www/img/3.jpg","http://blog.nraboy.com")
  }

  $scope.shareViaTwitter = function(message, image, link) {
    $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result){
      $cordovaSocialSharing.shareViaTwitter(message, image, link);
    }, function(error) {
      alert("Cannot share on Twitter");
    }); 
  }

  $scope.shareViaFacebook = function(message, image, link) {
    alert(message)
    alert(image)
    alert(link)
    $cordovaSocialSharing
      .shareViaFacebook(message, image, link)
      .then(function(result){
        //success!
        alert("sharing");
      } , function(error){
            alert(error);
      })
  }

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
    $scope.audioUrl = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.artifactId - 1].audio);
    $scope.playlist = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.artifactId - 1].audio2);
    $scope.location = $scope.artifacts[$stateParams.artifactId - 1].location;
  });

})

;