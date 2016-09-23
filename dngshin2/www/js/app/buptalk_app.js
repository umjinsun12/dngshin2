app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $stateProvider
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab_buptalk/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat_report', {
      url: '/chats/report',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab_req/report.html',
          controller: 'ReportCtrl'
        }
      }
    })

    .state('tab.bupchat-detail', {
      url: '/chats/:bupId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab_buptalk/bup-detail.html',
          controller: 'BupCtrl'
        }
      }
    });
});
