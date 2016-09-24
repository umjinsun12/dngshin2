app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $stateProvider
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
  });
});
