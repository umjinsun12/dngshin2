angular.module('starter.services', ['firebase'])

.factory('$localstorage', ['$window', function($window){
  return{
    set: function(key, value){
      $window.localStorage[key] = value;
    },
    get : function(key, defaultValue){
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value){
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key){
      return JSON.parse($window.localStorage[key] || '{}');
    }
  };
}])

.factory('Bups', function($firebaseArray) {

  var ref = firebase.database().ref().child("bupmem");
  var bups = $firebaseArray(ref);

  return {
    all: function() {
      return bups;
    },
    remove: function(bup) {
      bups.splice(bups.indexOf(bup), 1);
    },
    get: function(bupId) {
       return bups[bupId];
    }
  };
})
.factory('Bup_Comments', function() {

  var bup_comments = [{
    doc_id: 0,
    usr_id : '주식전문가',
    date: '2015.11.04',
    time: '23:14:01',
    point: 7.5,
    content : '나쁘지 않은거 같아요.. 추천해주신거에 대한 수익률이 좋습니다.'
  }, {
    doc_id: 0,
    usr_id : '상암동개미투자자',
    date: '2015.11.04',
    time: '23:14:01',
    point: 8.0,
    content : '말씀하는 종목중에 하나 대박났어요 ㅎㅎ 이번달에 전문가님때문에 돈 많이 벌었습니다. 감사합니다.'
  }];

  return {
    all: function() {
      return bup_comments;
    },
    remove: function(bup_comment) {
      bup_comments.splice(bups.indexOf(bup_comment), 1);
    },
    get: function(bup_commentId) {
      var ret = [];
      var cnt = 0;
      for (var i = 0; i < bup_comments.length; i++) {
        if (bup_comments[i].doc_id == parseInt(bup_commentId)) {
          ret[cnt++] = bup_comments[i];
        }
      }
      return ret;
    }
  };
});
