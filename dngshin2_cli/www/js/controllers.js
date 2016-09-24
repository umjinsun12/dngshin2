angular.module('starter.controllers', ['starter.services', 'firebase'])

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate, $firebaseArray, $ionicLoading, Bups) {
  $ionicLoading.show({
      template: '로딩 중...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  $scope.bups = Bups.all();

  $scope.bups.$loaded()
  .then(function(data) {
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  })
  .catch(function(error) {
    console.error("Error:", error);
  });


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



})

.controller('ChatsCtrl', function($scope, Bups, $firebaseArray, $ionicLoading, Bups) {
  $scope.bups = Bups.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.bup = Bups.get($stateParams.bupId);
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


.controller('BupCtrl', function($scope, $stateParams, Bups, Bup_Comments) {
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
