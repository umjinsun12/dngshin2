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

  .state('tab.home-setting', {
    url: '/home/setting',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_home/home-setting.html',
        controller: 'SettingCtrl'
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
  // 법무사 상세
  .state('tab.candibup', {
    url: '/home/report/:reportId',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_req/can-bup.html',
        controller: 'CandibupCtrl'
      }
    }
  })

  // 상세 법무사 정보
  .state('tab.candibup-bupdetail', {
    url: '/home/report/:reportId/:bupId/bupdetail',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_buptalk/bup-detail.html',
        controller: 'CandibupBupdetailCtrl'
      }
    }
  })

  //법무사 답장 정보
  .state('tab.candibup-replydetail', {
    url: '/home/report/:reportId/:bupId/replydetail',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab_req/reply-detail.html',
        controller: 'CandibupReplydetailCtrl'
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

  //환경설정 정보

});
