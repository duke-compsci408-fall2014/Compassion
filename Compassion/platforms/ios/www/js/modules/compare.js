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
.controller('CompareCtrl', function($scope, $stateParams, $http, $sce){

	$scope.captionVisible = false;
  $scope.tab = 1;


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
        
        $scope.playlist = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.compId - 1].audio2);
        $scope.comparativeImages[0].audio = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.compId - 1].audio2);

        if($scope.comparativeImages[1] !== undefined )
          $scope.comparativeImages[1].audio = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.compId - 1].audio3);
        
        if($scope.comparativeImages[2] !== undefined )
          $scope.comparativeImages[2].audio = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.compId - 1].audio4);
        
        if($scope.comparativeImages[3] !== undefined )
          $scope.comparativeImages[3].audio = $sce.trustAsResourceUrl($scope.artifacts[$stateParams.compId - 1].audio5);
        

        console.log($scope.comparativeImages)
      

    });




});

