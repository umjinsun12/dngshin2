// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app= angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-left');
  $ionicConfigProvider.navBar.alignTitle('center');

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
    url: '/login',
    abstract: true,
    templateUrl: 'templates/login/login.html'
  })

  .state('login.main', {
    url: '/main',
    views: {
      'login-main': {
        templateUrl: 'templates/login/login-main.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('login.bupreg', {
    url: '/main/bupreg',
    views: {
      'login-main': {
        templateUrl: 'templates/login/login-bupreg.html',
        controller: 'LoginRegCtrl'
      }
    }
  })

  .state('login.complete', {
    url: '/main/complete',
    views: {
      'login-main': {
        templateUrl: 'templates/login/login-complete.html',
        controller: 'LoginCtrl'
      }
    }
  })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_home/main.html',
        controller: 'HomeCtrl'
      }
    }
  })


  .state('tab.home-detail', {
    url: '/home/:reportId',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_home/main_detail.html',
        controller: 'HomeDetailCtrl'
      }
    }
  })

  .state('tab.home-send', {
    url: '/home/:reportId/send',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_home/main_send.html',
        controller: 'HomeSendCtrl'
      }
    }
  })
  .state('tab.home-complete', {
    url: '/home/:reportId/complete',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_home/main_detail_ok.html',
        controller: 'HomeCompleteCtrl'
      }
    }
  })


  .state('tab.myinfo', {
      url: '/myinfo',
      views: {
        'tab-myinfo': {
          templateUrl: 'templates/tab_myinfo/main.html',
          controller: 'MyinfoCtrl'
        }
      }
    })

  .state('tab.estlist', {
      url: '/estlist',
      views: {
        'tab-estlist': {
          templateUrl: 'templates/tab_estlist/main.html',
          controller: 'EstlistCtrl'
        }
      }
    })

    .state('tab.estlist-detail', {
        url: '/estlist/:estId',
        views: {
          'tab-estlist': {
            templateUrl: 'templates/tab_estlist/est-detail.html',
            controller: 'EstlistDetailCtrl'
          }
        }
      })

  .state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'templates/tab_settings/main.html',
            controller: 'SettingsCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login/main');

});
