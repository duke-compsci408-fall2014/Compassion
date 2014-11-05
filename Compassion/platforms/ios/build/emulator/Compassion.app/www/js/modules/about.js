
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    });
  });

