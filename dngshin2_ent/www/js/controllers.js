angular.module('starter.controllers', ['starter.services', 'firebase'])

.controller('LoginCtrl', function($scope,$ionicModal, $state, $firebaseAuth, $rootScope) {
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
      $rootScope.authData = firebaseUser.uid;
      $state.go('tab.home');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
})
.controller('LoginRegCtrl', function($scope, $firebaseAuth, $state, $firebaseArray) {
  var auth = $firebaseAuth();

    $scope.registeremail = function(user){
      auth.$createUserWithEmailAndPassword(user.email, user.password)
       .then(function(firebaseUser) {
         var bupmemRef = firebase.database().ref().child("bupmem");
         var bupmem = $firebaseArray(bupmemRef);
         bupmem.$add({
           uid : firebaseUser.uid,
           email : user.email,
           ptel : user.ptel,
           company_name : user.company_name,
           main_tel : user.main_tel,
           main_ptel : user.main_ptel,
           main_fax : user.main_fax,
           address : user.address,
           activity_area1 : user.activity_area1,
           activity_area2 : user.activity_area2,
           bussiness_num : user.bussiness_num,
           hello_msg : user.hello_msg
         });
         $state.go('login.complete');
       }).catch(function(error) {
            $scope.error = error;
      });
    };
})
.controller('HomeCtrl', function($scope, $rootScope, $state) {
  if($rootScope.authData == null){
    $state.go('login.main');
  }


  console.log($rootScope.authData);
})
.controller('MyinfoCtrl', function($scope, $state, $rootScope, $firebaseArray) {
  if($rootScope.authData == null){
    $state.go('login.main');
  }

  
})
.controller('EstlistCtrl', function($scope) {
})
.controller('SettingsCtrl', function($scope) {
});
