angular.module('starter.controllers', ['starter.services','firebase'])

.controller('LoginCtrl', function($scope,$ionicModal, $state) {
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


})
.controller('LoginRegCtrl', function($scope, $firebaseAuth,Userinfo) {
  var auth = $firebaseAuth();

  $scope.registeremail = funciton(useremail, userpw){
    auth.$createUserWithEmailAndPassword(useremail, userpw)
     .then(function(firebaseUser) {
       Userinfo.setEmail($scope.useremail);
       Userinfo.setPtel($scope.userptel);
     }).catch(function(error) {
          $scope.error = error;
      });
  };
})
.controller('HomeCtrl', function($scope) {
})
.controller('MyinfoCtrl', function($scope) {
})
.controller('EstlistCtrl', function($scope) {
})
.controller('SettingsCtrl', function($scope) {
});
