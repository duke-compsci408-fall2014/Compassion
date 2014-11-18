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
.controller('CompareCtrl', function($scope, $stateParams, $http){

	$scope.captionVisible = true;

	$scope.toggleCaptionVisibility = function() {
		$scope.captionVisible = !$scope.captionVisible;
	}
    
    $http.get('js/modules/data.json').success(function(data){
        $scope.comparativeImages = data[0].artifacts[$stateParams.artifactId -1].comparativeImages;
        $scope.comparativeText = data[0].artifacts[$stateParams.artifactId -1].comparativeImages[0].text;
        console.log($stateParams);
    });

});

