appctrl.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate, $firebaseArray, $ionicLoading, Bups, Reports) {
  $ionicLoading.show({
      template: '로딩 중...'
    }).then(function(){
    });

  $scope.bups = Bups.all();


  $scope.bups.$loaded()
  .then(function(data) {
    $ionicLoading.hide().then(function(){
      $scope.badge = Reports.all();
      console.log($scope.badge.length);
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

.controller('BupCtrl', function($scope, $stateParams, Bups, Bup_Comments) {
  $scope.bup = Bups.get($stateParams.bupId);
  $scope.comments = Bup_Comments.get($stateParams.bupId);
})



//candibupId
.controller('CandibupCtrl', function($scope, $stateParams, Bups, Bup_Comments, $localstorage, $firebaseArray, $firebaseObject) {

  var no_reqconRef_candibups = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData")).child('no').child($stateParams.reportId).child('candidate_bup');
  var bupmemreqs = firebase.database().ref().child("bupmem");
  var candibups = $firebaseArray(no_reqconRef_candibups);
  var bupmems = $firebaseObject(bupmemreqs);
  $scope.bupmems = {};
  $scope.reportId = $stateParams.reportId;

  candibups.$loaded().then(function(){
    for(var i = 0 ; i < candibups.length ; i++)
    {
      $scope.bupmems[i] = bupmems[candibups[i].$id];
      $scope.bupmems[i].report = candibups[i];
      $scope.bupmems[i].report.sum = parseInt($scope.bupmems[i].report.bosu) + parseInt($scope.bupmems[i].report.buga) + parseInt($scope.bupmems[i].report.chui) + parseInt($scope.bupmems[i].report.daehang) + parseInt($scope.bupmems[i].report.inji) + parseInt($scope.bupmems[i].report.ji) + parseInt($scope.bupmems[i].report.jngji) + parseInt($scope.bupmems[i].report.nong);
    }
  });

  console.log($scope.bupmems);

})

.controller('CandibupBupdetailCtrl', function($scope, $stateParams, Bups, Bup_Comments, $localstorage, $firebaseArray, $firebaseObject) {
  var bupmem_reqs = firebase.database().ref().child("bupmem").child($stateParams.bupId);
  $scope.bup = $firebaseObject(bupmem_reqs);

})

.controller('CandibupReplydetailCtrl', function($scope, $stateParams, Bups, Bup_Comments, $localstorage, $firebaseArray, $firebaseObject) {
  var no_reqconRef_candibups = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData")).child('no').child($stateParams.reportId);
  var no_reqconRef_bupsreport = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData")).child('no').child($stateParams.reportId).child('candidate_bup').child($stateParams.bupId);
  $scope.report = $firebaseObject(no_reqconRef_candibups);
  console.log($scope.report);
  $scope.my_est = $firebaseObject(no_reqconRef_bupsreport);
  $scope.my_est.$loaded().then(function(){
    $scope.my_est.sum = parseInt($scope.my_est.bosu) + parseInt($scope.my_est.buga) + parseInt($scope.my_est.chui) + parseInt($scope.my_est.daehang) + parseInt($scope.my_est.inji) + parseInt($scope.my_est.ji) + parseInt($scope.my_est.jngji) + parseInt($scope.my_est.nong);
  });
})

.controller('SettingCtrl', function($scope, $stateParams, Bups, Bup_Comments, $localstorage, $firebaseArray, $firebaseObject) {
  console.log("setting");
});
