app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $stateProvider
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_home/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.report', {
    url: '/home/report',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_req/report.html',
        controller: 'ReportCtrl'
      }
    }
  })

  .state('tab.buphome-detail', {
    url: '/home/:bupId',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_buptalk/bup-detail.html',
        controller: 'BupCtrl'
      }
    }
  });

});
