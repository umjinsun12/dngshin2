appctrl.controller('ReqCtrl', function($scope, $ionicPopup, $localstorage, $firebaseObject, $state, $firebaseArray) {

  var clientRef = firebase.database().ref().child("clientmem").child($localstorage.get("authuserData"));
  var reqconRef = firebase.database().ref().child("reqcontent").child($localstorage.get("authuserData")).child("no");
  var reqconserver = $firebaseArray(reqconRef);
  var person = $firebaseObject(clientRef);

  $scope.bup_request = function(type, reqcon) {
    var alertPopup = $ionicPopup.confirm({
      title: '견적보내기',
      template: '견적을 보내시겠습니까?'
    });
    alertPopup.then(function(res) {
      if(res) {


        //reqconserver.area = reqcon.area;
        var nowdate = new Date();
        console.log(nowdate);
        reqconserver.$add({
          uid : $localstorage.get("authuserData"),
          reqtype : type,
          name : person.user_name,
          price : reqcon.price,
          address : reqcon.address,
          remaindat : reqcon.remaindate,
          chaesale : reqcon.chaesale,
          conmment : reqcon.comment,
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
});
