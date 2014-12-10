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
	
	
    $scope.artifacts = [];
    $http.get('js/modules/data/data.json').success(function(data){  	
      		for(var i =0; i<3; i++){
      			for(var j = 0; j<data[i].artifacts.length; j++){
      				$scope.artifacts[$scope.artifacts.length] = angular.fromJson(data[i].artifacts[j]);
      		}
      	}
      	
      	
        $scope.comparativeImages = $scope.artifacts[$stateParams.artifactId -1].comparativeImages;
        $scope.originalImage = $scope.artifacts[$stateParams.artifactId -1];   
        console.log($scope.originalImage);       
    });

});

