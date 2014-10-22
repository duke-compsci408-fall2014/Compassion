
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
  .controller('TermsCtrl', function($scope, $stateParams) {
      
  $scope.terms = [
    {
      term: 'term A', definition: 'Some definition'
    },
    {
      term: 'term B', definition: 'Some definition'
    }

  ];

  
});

