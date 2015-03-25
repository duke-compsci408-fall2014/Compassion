.factory('AppInit', function ($q, $cordovaSplashscreen, $ionicPlatform, $timeout) {
    return {
        splash: function() {
 
            var deferred = $q.defer();
 
            $ionicPlatform.ready(function(){
                $timeout(function(){
                    $cordovaSplashscreen.hide();
                    deferred.resolve();
                }, 500);
            });
 
            return deferred.promise;
            
        }
    };
})