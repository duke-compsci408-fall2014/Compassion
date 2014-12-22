
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
       $scope.terms = [];

       $http.get("js/modules/data/terms.json").success(function(data){
         for(i = 0; i<data.length; i++){
            $scope.terms[i] = data[i]; 
         }   

                console.log($scope.terms[0]); 
    
      })


       $scope.playSound = function(audio){ 
          new Media('audio').play(); 
       }
  
});

