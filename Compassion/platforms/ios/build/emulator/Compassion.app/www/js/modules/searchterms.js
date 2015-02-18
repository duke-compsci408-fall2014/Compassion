
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
  .controller('TermsCtrl', function($scope, $http, $cordovaMedia, $ionicLoading) {
       $scope.terms = [];

       $http.get("js/modules/data/terms.json").success(function(data){
         for(i = 0; i<data.length; i++){
            $scope.terms[i] = data[i]; 
         }   
            console.log($scope.terms[0]); 
    
      })


       $scope.play = function(src){ 
          console.log("here")
          var media = new Media(src, null, null, mediaStatusCallback);
          $cordovaMedia.play(media);
       }

       var mediaStatusCallback = function (status) {
          if(status == 1){
              $ionicLoading.show({template: 'Loading...'}); 
          } else {
              $ionicLoading.hide(); 
          }

       }
  
});

