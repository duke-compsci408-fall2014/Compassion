angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ExploreCtrl', function($scope) {
  $scope.themes = [
    { title: 'theme 1', id: 1 },
    { title: 'theme 2', id: 2 },
    { title: 'theme 3', id: 3 },

  ];
})

.controller('ThemeCtrl', function($scope, $stateParams) {
  $scope.currentTheme = $stateParams.themeId;
  $scope.artifacts = [
    { name: 'artifact 1', id: 1 },
    { name: 'artifact 2', id: 2 },
    { name: 'artifact 3', id: 3 },
  ];
})

.controller('ArtifactCtrl', function($scope, $stateParams) {
  $scope.curArtId = $stateParams.artifactId;
})

.controller('SlideshowCtrl', function($scope, $ionicSlideBoxDelegate){
   $scope.nextSlide = function (){ 
        $ionicSlideBoxDelegate.next();    
   }
   
   
});
