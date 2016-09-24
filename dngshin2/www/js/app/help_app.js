app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $stateProvider
  .state('tab.dnghelp', {
    url: '/dnghelp',
    views: {
      'tab-dnghelp': {
        templateUrl: 'templates/tab_help/tab-dnghelp.html',
        controller: 'DnghelpCtrl'
      }
    }
  });
});
