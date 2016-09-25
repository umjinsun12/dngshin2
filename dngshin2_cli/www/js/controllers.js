angular.module('starter.controllers', ['starter.services', 'firebase'])

.controller('TabCtrl', function($scope, $state, $firebaseObject, $localstorage, $ionicPopup, $ionicModal, $firebaseAuth, $firebaseArray) {
  $ionicModal.fromTemplateUrl('login-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('agree-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.agreemodal = modal;
  });

  $ionicModal.fromTemplateUrl('reg-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.regmodal = modal;
  });


  $scope.openagreeModal = function(){$scope.agreemodal.show();};
  $scope.closeagreeModal = function(){$scope.agreemodal.hide();};

  $scope.closeModal = function() {$scope.modal.hide();};

  $scope.openregModal = function(){
    $scope.agreemodal.hide();
    $scope.regmodal.show();
  };

  $scope.closeregModal = function(){$scope.regmodal.hide();};

  $scope.logchk = function(){
      if($localstorage.get("authuserData")=="null" || $localstorage.get("authuserData")==null){
        var confirmPopup = $ionicPopup.confirm({
        title: '로그인이 필요한 서비스입니다.',
        template: '로그인 하시겠습니까?'
      });
      confirmPopup.then(function(res) {
        if(res) {
           $scope.modal.show();
        } else {
          console.log('You are not sure');
        }
      });
    }
    else{
      console.log($localstorage.get("authuserData"));
      $state.go('tab.req');
    }
  };

  var auth = $firebaseAuth();
  $scope.registeremail = function(user){
      auth.$createUserWithEmailAndPassword(user.email, user.password)
       .then(function(firebaseUser) {
         var clientmemRef = firebase.database().ref().child("clientmem").child(firebaseUser.uid);
         var clientmem = $firebaseObject(clientmemRef);
         clientmem.uid = firebaseUser.uid;
         clientmem.email = user.email;
         clientmem.user_name = user.user_name;
         clientmem.$save();
         $ionicPopup.alert({
           title: '알림',
           template: '<center>회원가입이 성공하였습니다.</center>'
         }).then(function(){
           $scope.regmodal.hide();
         });

       }).catch(function(error) {
         $ionicPopup.alert({
           title: '알림',
           template: '<center>이메일 주소 혹은 비밀번호가 잘못되었습니다.</center>'
         });
      });
  }

  $scope.memberlogin = function(input_info){
    auth.$signInWithEmailAndPassword(input_info.email, input_info.password).then(function(firebaseUser) {
      console.log("Signed in as:", firebaseUser.uid);
      $localstorage.set("authuserData", firebaseUser.uid);
      $scope.modal.hide();
      $state.go('tab.req');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
})


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

.controller('ReqCtrl', function($scope, $ionicPopup, $localstorage, $firebaseObject, $state, $firebaseArray) {


  $scope.bup_request = function(type, reqcon) {
    var alertPopup = $ionicPopup.confirm({
      title: '견적보내기',
      template: '견적을 보내시겠습니까?'
    });
    alertPopup.then(function(res) {
      if(res) {
        var reqconRef = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData"));
        var reqconserver = $firebaseArray(reqconRef);

        //reqconserver.area = reqcon.area;
        var nowdate = new Date();
        console.log(nowdate);
        reqconserver.$add({
          uid : $localstorage.get("authuserData"),
          reqtype : type,
          price : reqcon.price,
          address : reqcon.address,
          remaindat : reqcon.remaindate,
          chaesale : reqcon.chaesale,
          conmment : reqcon.comment,
          chk : 'N',
          date : nowdate.toString(),
          cadidate_bup : 0
        }).then(function(){
          $ionicPopup.alert({
            title: '알림',
            template: '<center>견적보내기가 성공하였습니다.</center>'
          }).then(function(){
            $state.go('tab.home')
          });
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });

      } else {
        console.log('You are not sure');
      }
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

.controller('DnghelpCtrl', function($scope, $state, $localstorage) {
  $scope.logout = function(){
    $localstorage.set("authuserData", "");
    $state.go('tab.home');
  }
})


.controller('BupCtrl', function($scope, $stateParams, Bups, Bup_Comments) {
  $scope.bup = Bups.get($stateParams.bupId);
  $scope.comments = Bup_Comments.get($stateParams.bupId);
})

.controller('ReportCtrl', function($scope, Bups, $ionicPopup, $localstorage) {


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
