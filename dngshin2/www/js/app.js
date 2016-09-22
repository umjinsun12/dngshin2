// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.tabs.style("standard");
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
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
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.report', {
    url: '/home/report',
    views: {
      'tab-home': {
        templateUrl: 'templates/report.html',
        controller: 'ReportCtrl'
      }
    }
  })

  .state('tab.buphome-detail', {
    url: '/home/:bupId',
    views: {
      'tab-home': {
        templateUrl: 'templates/bup-detail.html',
        controller: 'BupCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat_report', {
      url: '/chats/report',
      views: {
        'tab-chats': {
          templateUrl: 'templates/report.html',
          controller: 'ReportCtrl'
        }
      }
    })

    .state('tab.bupchat-detail', {
      url: '/chats/:bupId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/bup-detail.html',
          controller: 'BupCtrl'
        }
      }
    })

    .state('tab.bup-detail', {
      url: '/home/:bupId',
      views: {
        'tab-home': {
          templateUrl: 'templates/bup-detail.html',
          controller: 'BupCtrl'
        }
      }
    })




  .state('tab.req', {
    url: '/req',
    views: {
      'tab-req': {
        templateUrl: 'templates/tab-req.html',
        controller: 'ReqCtrl'
      }
    }
  })

  .state('tab.req_report', {
    url: '/req/report',
    views: {
      'tab-req': {
        templateUrl: 'templates/report.html',
        controller: 'ReportCtrl'
      }
    }
  })

  //***********************************
  //계산기 부분
  //***********************************
  .state('tab.calcul', {
    url: '/calcul',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab-calcul.html',
        controller: 'CalculCtrl'
      }
    }
  })

  .state('tab.cal1sise', {
    url: '/calcul/cal1sise',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/cal-1sise.html',
        controller: 'Cal1siseCtrl'
      }
    }
  })
  .state('tab.cal2yang', {
    url: '/calcul/cal2yang',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/cal-2yang.html',
        controller: 'Cal2yangCtrl'
      }
    }
  })
  .state('tab.cal3chui', {
    url: '/calcul/cal3chui',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/cal-3chui.html',
        controller: 'Cal3chuiCtrl'
      }
    }
  })
  .state('tab.cal4jung', {
    url: '/calcul/cal4jung',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/cal-4jung.html',
        controller: 'Cal4jungCtrl'
      }
    }
  })
  .state('tab.cal5je', {
    url: '/calcul/cal5je',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/cal-5je.html',
        controller: 'Cal5jeCtrl'
      }
    }
  })
  .state('tab.cal6myun', {
    url: '/calcul/cal6myun',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/cal-6myun.html',
        controller: 'Cal6myunCtrl'
      }
    }
  })
  //계산기 부분 종료


  .state('tab.dnghelp', {
    url: '/dnghelp',
    views: {
      'tab-dnghelp': {
        templateUrl: 'templates/tab-dnghelp.html',
        controller: 'DnghelpCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');


});
