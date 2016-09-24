app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $stateProvider
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
  .state('tab.calreport', {
    url: '/calcul/report',
    views: {
      'tab-calcul': {
        templateUrl: 'templates/tab_req/report.html',
        controller: 'ReportCtrl'
      }
    }
  });
  //계산기 부분 종료

});
