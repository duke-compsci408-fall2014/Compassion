
angular.module('starter')

.config(function($stateProvider) {
  $stateProvider
  .state('app.singleTheme', {
    url: "/themes/:themeId",
    views: {
      'menuContent' :{
        templateUrl: "templates/theme.html",
        controller: 'ThemeCtrl'
      }
    }
  });
})

.controller('ThemeCtrl', ['$scope', '$http', '$stateParams',  function($scope,$http,$stateParams){ 
  $scope.currentTheme = $stateParams.themeId;

  $http.get('js/modules/data/data.json').success(function(data){

      for(var i = 0; i<data.length; i++){
        var id = parseInt(data[i].id); 

        if( id == $scope.currentTheme){
            $scope.artifacts = data[i].artifacts; 
            $scope.themeTitle = data[i].title; 
            $scope.themeText = data[i].text; 
        }
       }
  })  
  
}]  
            
);

