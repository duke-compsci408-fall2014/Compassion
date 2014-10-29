angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
    // loading states
    .state('start1', {
      url: "",
      templateUrl: 'templates/start/quote.html',
      controller: 'Start1Ctrl'
    })
    .state('start2', {
      url: "/",
      templateUrl: 'templates/start/load.html',
      controller: 'Start2Ctrl'
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
.controller('Start1Ctrl', function($scope, $timeout, $state) {
  $timeout(function() {
    $state.go('start2');
  }, 3000);
})
.controller('Start2Ctrl', function($scope, $timeout, $state) {
  $timeout(function() {
    $state.go('enter');
  }, 3000);
})
.controller('EnterCtrl', function($scope,$state) {
  $scope.enter = function() {
    $state.go('concierge');
  };
});

