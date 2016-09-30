appCtrl.controller('MyinfoCtrl', function($scope, $state, $localstorage, $firebaseObject, $ionicPopup,$ionicLoading) {
  if($localstorage.get("authData") == null){
    $state.go('login.main');
  }
  console.log($localstorage.get("authData"));
  $ionicLoading.show({
      template: '로딩 중...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  var ref = firebase.database().ref().child('bupmem').child($localstorage.get("authData"));
  $scope.user = $firebaseObject(ref);

  $scope.user.$loaded()
  .then(function(data) {
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  })
  .catch(function(error) {
    console.error("Error:", error);
  });


  $scope.modifyinfo = function(){
    $scope.user.$save();

    $ionicPopup.alert({
      title: '알림',
      template: '<center>내 정보 수정이 완료 되었습니다.</center>'
    });
  }

});
