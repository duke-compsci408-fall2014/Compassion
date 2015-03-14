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


.controller('ArtifactCtrl', function($scope, $stateParams, $http, $sce, $cordovaSocialSharing, $ionicPopover) {
  
  var template = '<ion-popover-view><ion-content> Hello! </ion-content></ion-popover-view>'

  

  // .fromTemplateUrl() method 
  $ionicPopover.fromTemplateUrl('templates/artifact/social-sharing.html', {
    scope: $scope,
  }).then(function(popover){
    $scope.popover = popover;
  });

  $scope.openPopover = function($event){
    $scope.popover.show($event);
  }
  $scope.closePopover = function(){
    $scope.popover.hide(); 
  }

  //Cleanup popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove(); 
  })
  //Execute action on hide popover
  $scope.$on('popover.hidden', function(){

  });
  //Execute action on remove popover
  $scope.$on('popover.removed', function(){
    //Execute action
  });


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

  $scope.imageURLToShare = function(imageURL){
    return 'www'+imageURL; 
  }

  $scope.shareAnywhere = function(){ 
    $cordovaSocialSharing.share("This is your message", "This is your subject", "www/img/3.jpg","http://blog.nraboy.com")
  }



  $scope.shareViaTwitter = function(message, image, link) {
    imageURLToShare = 'www/'+image; 

    $cordovaSocialSharing
      .shareViaTwitter(message, imageURLToShare, link)
      .then(function(result){
        //success!
      } , function(error){
            alert(error);
      })
  }



  $scope.shareViaFacebook = function(message, image, link) {
    imageURLToShare = 'www/'+image; 

    $cordovaSocialSharing
      .shareViaFacebook(message, imageURLToShare, link)
      .then(function(result){
        //success!
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
    $scope.audioUrl2 = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.artifactId - 1].audiob);
    $scope.playlist = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.artifactId - 1].audio2);
    $scope.location = $scope.artifacts[$stateParams.artifactId - 1].location;
  });




})

;