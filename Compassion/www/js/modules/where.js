angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
  .state('app.where', {
        url: "/artifacts/details/:artifactId/where",
        views: {
          'menuContent' :{
            templateUrl: "templates/artifact/where.html",
            controller: 'WhereCtrl'
          }
        }
      });
})
.controller('WhereCtrl', function($scope, $stateParams){

});

