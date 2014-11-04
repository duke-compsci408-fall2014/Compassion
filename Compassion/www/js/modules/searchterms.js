
angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.searchTerms', {
      url: "/searchTerms",
      views: {
        'menuContent' :{
          templateUrl: "templates/searchTerms.html",
          controller: 'TermsCtrl'
        }
      }
    });
  })
  .controller('TermsCtrl', function($scope, $http) {
       $http.get("/js/modules/data.json").success(function(data){
         $scope.terms = data[4];       
      })
  
});

