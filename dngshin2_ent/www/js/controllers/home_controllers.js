appCtrl.controller('HomeCtrl', function($scope, $localstorage, $state, Reports, $window, $firebaseObject, $ionicLoading, $ionicHistory) {

  $ionicLoading.show({
      template: '로딩 중...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  var ref = firebase.database().ref().child("reqcontent");
  var content = $firebaseObject(ref);
  content.$loaded().then(function(){
    $ionicLoading.hide()
    $scope.reports_cnt = Reports.all();
  });

  if($localstorage.get("authData") == null){
    $state.go('login.main');
  }
  $scope.reports = Reports.all();


  $scope.refresh = function() {
    $window.location.reload();
  };
})

.controller('HomeDetailCtrl', function($scope, $localstorage, $state, Reports, $window, $firebaseObject, $ionicLoading, $stateParams) {
  $scope.report = Reports.get($stateParams.reportId);
})

.controller('HomeSendCtrl', function($scope, $localstorage, $state, Reports, $window, $firebaseObject,$firebaseArray, $ionicLoading, $stateParams, $ionicHistory) {
  $scope.report = Reports.get($stateParams.reportId);
  var ref = firebase.database().ref().child("reqcontent").child($scope.report.uid).child("no").child($scope.report.key).child("candidate_bup").child($localstorage.get("authData"));
  $scope.reply = $firebaseObject(ref);

  $scope.send_msg = function(reply){
    $scope.reply.$save().then(function(){
        $state.go('tab.home-complete');
    });
  };

})

.controller('HomeCompleteCtrl', function($scope, $localstorage, $state, Reports, $window, $firebaseObject, $ionicLoading, $stateParams, $ionicHistory) {
  $scope.report = Reports.get($stateParams.reportId);
  $scope.go_main = function(){
    $ionicHistory.nextViewOptions({
    disableAnimate: true,
    disableBack: true
    });
    $state.go('tab.home', true);
  };
});
