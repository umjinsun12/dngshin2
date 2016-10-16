appctrl.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate, $firebaseArray, $ionicLoading, Bups) {
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

.controller('BupCtrl', function($scope, $stateParams, Bups, Bup_Comments) {
  $scope.bup = Bups.get($stateParams.bupId);
  $scope.comments = Bup_Comments.get($stateParams.bupId);
})

//candibupId
.controller('CandibupCtrl', function($scope, $stateParams, Bups, Bup_Comments, $localstorage, $firebaseArray, $firebaseObject) {

  var no_reqconRef_candibups = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData")).child('no').child($stateParams.reportId).child('candidate_bup');
  var bupmems = firebase.database().ref().child("bupmem");
  $scope.candibups = $firebaseArray(no_reqconRef_candibups);
  var bupmems = $firebaseObject(bupmems);

  $scope.candibups.$loaded().then(function(){
    for(var i = 0 ; i < $scope.candibups.length ; i++)
    {
      console.log($scope.candibups[i].$id);
      console.log(bupmems[$scope.candibups[i].$id]);
    }

  });

});
