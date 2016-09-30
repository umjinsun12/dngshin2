var appCtrl = angular.module('starter.controllers', ['starter.services', 'firebase'])

.controller('EstlistCtrl', function($scope, Reports, $window) {
  $scope.report_chks = Reports.allChks();
  $scope.refresh = function(){
    $window.location.reload();
  };
})

.controller('EstlistDetailCtrl', function($scope, Reports, $window, $stateParams, $localstorage) {
 $scope.report = Reports.getChks($stateParams.estId);
 $scope.my_est = $scope.report.candidate_bup[$localstorage.get("authData")];
})

.controller('SettingsCtrl', function($scope) {
});
