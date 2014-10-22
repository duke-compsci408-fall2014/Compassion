angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
    // loading states
    .state('start', {
      url: "",
      templateUrl: 'templates/start/load.html',
      controller: 'StartCtrl'
    })
    .state('enter', {
      url: "/",
      templateUrl: 'templates/start/enter.html',
      controller: 'EnterCtrl'
    })
    .state('concierge', {
      url: "/concierge",
      templateUrl: 'templates/start/concierge.html'
    });
  })
.controller('StartCtrl', function($scope, $timeout, $state) {
  $timeout(function() {
    $state.go('enter');
  }, 1000);
})
.controller('EnterCtrl', function($scope,$state) {
  $scope.enter = function() {
    $state.go('concierge');
  };
});

