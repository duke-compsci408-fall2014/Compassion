
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.searchArtifacts', {
      url: "/searchArtifacts",
      views: {
        'menuContent' :{
          templateUrl: "templates/searchArtifacts.html"
        }
      }
    });
  });

