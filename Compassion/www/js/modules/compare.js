angular.module('starter')
.config(function($stateProvider) {
  $stateProvider
  .state('app.compare', {
        url: "/artifacts/details/:artifactId/compare/:compId",
        views: {
          'menuContent' :{
            templateUrl: "templates/artifact/compare.html",
            controller: 'CompareCtrl'
          }
        }
      });
})
.controller('CompareCtrl', function($scope, $stateParams){

	$scope.captionVisible = true;

	$scope.toggleCaptionVisibility = function() {
		$scope.captionVisible = !$scope.captionVisible;
	}

});

