
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.credits', {
      url: "/credits",
      views: {
        'menuContent' :{
          templateUrl: "templates/credits.html"
        }
      }
    });
  });

