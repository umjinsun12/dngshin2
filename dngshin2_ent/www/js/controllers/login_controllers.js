appCtrl.controller('LoginCtrl', function($scope,$ionicModal, $state, $firebaseAuth, $localstorage) {
  var auth = $firebaseAuth();

  //openModal
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.removeModal = function(){
    $scope.modal.hide();
    $state.go('login.bupreg');
  };

  $scope.memberlogin = function(input_info){
    auth.$signInWithEmailAndPassword(input_info.email, input_info.password).then(function(firebaseUser) {
      console.log("Signed in as:", firebaseUser.uid);
      $localstorage.set("authData", firebaseUser.uid);
      $state.go('tab.home');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
})

.controller('LoginRegCtrl', function($scope, $firebaseAuth, $state, $firebaseObject, $ionicPopup) {
  var auth = $firebaseAuth();

    $scope.registeremail = function(user){
      auth.$createUserWithEmailAndPassword(user.email, user.password)
       .then(function(firebaseUser) {
         var bupmemRef = firebase.database().ref().child("bupmem").child(firebaseUser.uid);
         var bupmem = $firebaseObject(bupmemRef);
         bupmem.uid = firebaseUser.uid;
         bupmem.email = user.email;
         bupmem.ptel = user.ptel;
         bupmem.company_name = user.company_name;
         bupmem.main_tel = user.main_tel;
         bupmem.main_ptel = user.main_ptel;
         bupmem.main_fax = user.main_fax;
         bupmem.address = user.address;
         bupmem.activity_area1 = user.activity_area1;
         bupmem.activity_area2 = user.activity_area2;
         bupmem.bussiness_num = user.bussiness_num;
         bupmem.bup_name = user.bup_name;
         bupmem.hello_msg = user.hello_msg;
         bupmem.$save();
         $state.go('login.complete');
       }).catch(function(error) {
         $ionicPopup.alert({
           title: '알림',
           template: '<center>이메일 주소 혹은 비밀번호가 잘못되었습니다.</center>'
         });
      });
    };
});
