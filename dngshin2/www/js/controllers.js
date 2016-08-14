angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate, Dash) {
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  $scope.chats = Dash.all();
  $scope.remove = function(chat){
    Chats.remove(chat);
  };

})

.controller('ChatsCtrl', function($scope, Bups) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.bups = Bups.all();
  $scope.remove = function(bup) {
    Chats.remove(bup);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ReqCtrl', function($scope) {
})

.controller('CalculCtrl', function($scope) {
})

.controller('DnghelpCtrl', function($scope) {
})
.controller('BupCtrl', function($scope, $stateParams,Bups,Bup_Comments) {
  $scope.bup = Bups.get($stateParams.bupId);
  $scope.comments = Bup_Comments.get($stateParams.bupId);
});
