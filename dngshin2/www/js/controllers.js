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

.controller('ReqCtrl', function($scope, $ionicPopup) {
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: '견적보내기',
      template: '견적 보내기가 완료되었습니다.'
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };
})

//계산기 부분 컨트롤러
.controller('CalculCtrl', function($scope) {
})
.controller('Cal1siseCtrl', function($scope) {
})
.controller('Cal2yangCtrl', function($scope) {
})
.controller('Cal3chuiCtrl', function($scope) {
})
.controller('Cal4jungCtrl', function($scope) {
})
.controller('Cal5jeCtrl', function($scope) {
})
.controller('Cal6myunCtrl', function($scope) {
})
//계산기 컨트롤러 종료

.controller('DnghelpCtrl', function($scope) {
})


.controller('BupCtrl', function($scope, $stateParams,Bups, Bup_Comments) {
  $scope.bup = Bups.get($stateParams.bupId);
  $scope.comments = Bup_Comments.get($stateParams.bupId);
})
.controller('ReportCtrl', function($scope, Bups, $ionicPopup) {
  $scope.bups = Bups.all();

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: '정말로 삭제하시겠습니까?',
      template: '삭제하시면 되돌릴 수 없습니다.'
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
});
