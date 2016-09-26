var appctrl = angular.module('starter.controllers', ['starter.services', 'firebase'])

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

  $scope.logchk = function(type){
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
      $state.go('tab.home');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
})

.controller('ReportCtrl', function($scope, Bups, $ionicPopup, $localstorage, $state, $firebaseArray) {

  if($localstorage.get("authuserData")=="null" || $localstorage.get("authuserData")==null){
    $scope.logchk('myreq');
    $state.go('tab.home');
  }else{
    var no_reqconRef = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData")).child('no');
    var yes_reqconRef = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData")).child('yes');
    $scope.no_reqcons = $firebaseArray(no_reqconRef);
    $scope.yes_reqcons = $firebaseArray(yes_reqconRef);
    console.log($scope.no_reqcons.no);

    $scope.no_reqcons.$loaded(function(){
      for(var i=0; i<$scope.no_reqcons.length ; i++){
        var d = new Date($scope.no_reqcons[i].date);
        $scope.no_reqcons[i].date = (d.getFullYear() + '년 ') + (d.getMonth()+1)+'월 '+(d.getDate()+1)+'일 ' + d.getHours() + ":" + d.getMinutes();
      }
    });
  }

  $scope.remove_req = function(r_index, type) {
    console.log(r_index);
    var confirmPopup = $ionicPopup.confirm({
      title: '정말로 삭제하시겠습니까?',
      template: '삭제하시면 되돌릴 수 없습니다.'
    });

    confirmPopup.then(function(res) {
      if(res) {
        if(type=="no"){
            $scope.no_reqcons.$remove(r_index);
        }else{
            $scope.yes_reqcons.$remove(r_index);
        }

      } else {
        console.log('You are not sure');
      }
    });
  };
});
