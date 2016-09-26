appctrl.controller('ChatsCtrl', function($scope, Bups, $firebaseArray, $ionicLoading, Bups) {
  $scope.bups = Bups.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.bup = Bups.get($stateParams.bupId);
});
