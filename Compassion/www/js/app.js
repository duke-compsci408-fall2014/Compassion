// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('index', {
      url: "/",
      templateUrl: 'templates/enterexhibit.html'
    })

    .state('app.title', {
      url: "/title",
      views: {
        'menuContent' :{
          templateUrl: "templates/title.html"
        }
      }
    })
    .state('app.enterexhibit', {
      url: "/enterexhibit",
      views: {
      'menuContent' :{
      templateUrl: "templates/enterexhibit.html"
       }
      }
    })
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })
  
    .state('app.explore', {
      url: "/explore",
      views: {
        'menuContent' :{
          templateUrl: "templates/explore.html",
          controller: 'ExploreCtrl'
        }
      }
    })
  
     .state('app.slideshow', {
      url: "/slideshow",
      views: {
        'menuContent' :{
          templateUrl: "templates/slideshow.html",
          controller: 'SlideshowCtrl'
        }
      }
    })

    .state('app.singleTheme', {
      url: "/themes/:themeId",
      views: {
        'menuContent' :{
          templateUrl: "templates/theme.html",
          controller: 'ThemeCtrl'
        }
      }
    })
    .state('app.artifactFullScreen', {
      url: "/artifacts/:artifactId",
      views: {
        'menuContent' :{
          templateUrl: "templates/artifact/full_screen.html",
          controller: 'ArtifactCtrl'
        }
      }
    })
    .state('app.singleArtifactIntermediate', {
      url: "/artifacts/caption/:artifactId",
      views: {
        'menuContent' :{
          templateUrl: "templates/artifact/intermediate.html",
          controller: 'ArtifactCtrl'
        }
      }
    })
    .state('app.singleArtifactDetails', {
      url: "/artifacts/details/:artifactId",
      views: {
        'menuContent' :{
          templateUrl: "templates/artifact/details.html",
          controller: 'ArtifactCtrl'
        }
      }
    })
  
    .state('app.searchTerms', {
      url: "/searchTerms",
      views: {
        'menuContent' :{
          templateUrl: "templates/searchTerms.html",
          controller: 'TermsCtrl'
        }
      }
    })
  
  .state('app.searchArtifacts', {
      url: "/searchArtifacts",
      views: {
        'menuContent' :{
          templateUrl: "templates/searchArtifacts.html"
        }
      }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});

