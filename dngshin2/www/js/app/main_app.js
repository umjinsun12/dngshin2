var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-left');
  $ionicConfigProvider.navBar.alignTitle('center');

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:



    .state('tab.bup-detail', {
      url: '/home/:bupId',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab_buptalk/bup-detail.html',
          controller: 'BupCtrl'
        }
      }
    })
  .state('tab.req', {
    url: '/req',
    views: {
      'tab-req': {
        templateUrl: 'templates/tab_req/tab-req.html',
        controller: 'ReqCtrl'
      }
    }
  })
  .state('tab.req_report', {
    url: '/req/report',
    views: {
      'tab-req': {
        templateUrl: 'templates/tab_req/report.html',
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
        templateUrl: 'templates/tab_calcul/tab-calcul.html',
        controller: 'CalculCtrl'
      }
    }
  })

  .state('tab.cal1sise', {
    url: '/calcul/cal1sise',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab_calcul/cal-1sise.html',
        controller: 'Cal1siseCtrl'
      }
    }
  })
  .state('tab.cal2yang', {
    url: '/calcul/cal2yang',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab_calcul/cal-2yang.html',
        controller: 'Cal2yangCtrl'
      }
    }
  })
  .state('tab.cal3chui', {
    url: '/calcul/cal3chui',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab_calcul/cal-3chui.html',
        controller: 'Cal3chuiCtrl'
      }
    }
  })
  .state('tab.cal4jung', {
    url: '/calcul/cal4jung',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab_calcul/cal-4jung.html',
        controller: 'Cal4jungCtrl'
      }
    }
  })
  .state('tab.cal5je', {
    url: '/calcul/cal5je',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab_calcul/cal-5je.html',
        controller: 'Cal5jeCtrl'
      }
    }
  })
  .state('tab.cal6myun', {
    url: '/calcul/cal6myun',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab_calcul/cal-6myun.html',
        controller: 'Cal6myunCtrl'
      }
    }
  })
  //계산기 부분 종료


  .state('tab.dnghelp', {
    url: '/dnghelp',
    views: {
      'tab-dnghelp': {
        templateUrl: 'templates/tab_help/tab-dnghelp.html',
        controller: 'DnghelpCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');


});
