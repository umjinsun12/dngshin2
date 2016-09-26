appctrl.controller('DnghelpCtrl', function($scope, $state, $localstorage) {
  $scope.logout = function(){
    $localstorage.set("authuserData", "");
    $state.go('tab.home');
  }
});
