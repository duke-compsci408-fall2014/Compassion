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
    	$scope.artifacts = [];
      		for(var i =0; i<3; i++){
      			for(var j = 0; j<data[i].artifacts.length; j++){
      				$scope.artifacts[$scope.artifacts.length] = angular.fromJson(data[i].artifacts[j]);
      		}
      	}
      	
      	
        $scope.comparativeImages = $scope.artifacts[$stateParams.artifactId -1].comparativeImages;
        console.log($scope.comparativeImages); 
        $scope.comparativeText = $scope.artifacts[$stateParams.artifactId -1].comparativeImages[0].text;
    	console.log($scope.comparativeText); 
    });

});

