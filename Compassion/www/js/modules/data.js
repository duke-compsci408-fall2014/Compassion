angular.module('starter'); 

.service('ThemeData', function(){ 
    return [
        {title: 'theme 1', id: 1}, 
        {title: 'theme 2', id: 2},
        {title: 'theme 3', id: 4},    
    ]; 
})
        
.factory('ThemeData'); 
 