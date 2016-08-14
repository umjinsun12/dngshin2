angular.module('starter.services', [])

.factory('Bups', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bups = [{
    id: 0,
    name: '김영종',
    company: 'OTO 법무사사무소 (인천)',
    face: 'img/ben.png',
    total_point: 8.85,
    review_cnt : 10
  }, {
    id: 1,
    name: '김소영',
    company: '법무사사무소 비즈온(연수구)',
    face: 'img/max.png',
    total_point: 8.85,
    review_cnt : 10
  }, {
    id: 2,
    name: '임종광',
    company: '가원법률사무소 변호사(남구)',
    face: 'img/adam.jpg',
    total_point: 8.85,
    review_cnt : 10
  }, {
    id: 3,
    name: '이재한',
    company: '갈현법률사무소(갈현)',
    face: 'img/perry.png',
    total_point: 8.85,
    review_cnt : 10
  }, {
    id: 4,
    name: '이재한',
    company: '갈현법률사무소(갈현)',
    face: 'img/mike.png',
    total_point: 8.85,
    review_cnt : 10
  }];

  return {
    all: function() {
      return bups;
    },
    remove: function(bup) {
      bups.splice(bups.indexOf(bup), 1);
    },
    get: function(bupId) {
      for (var i = 0; i < bups.length; i++) {
        if (bups[i].id == parseInt(bupId)) {
          return bups[i];
        }
      }
      return null;
    }
  };
})

.factory('Dash', function() {
  var chats = [{
    id: 0,
    name: '김영종',
    lastText: 'OTO 법무사사무소 (인천)',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '최민석',
    lastText: '법무사사무소 비즈온(연수구)',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '임종광',
    lastText: '가원법률사무소 변호사(남구)',
    face: 'img/adam.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id == parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

})

.factory('Bup_Comments', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bup_comments = [{
    doc_id: 0,
    usr_id : '주식전문가',
    date: '2015.11.04',
    time: '23:14:01',
    point: 7.5,
    content : '나쁘지 않은거 같아요.. 추천해주신거에 대한 수익률이 좋습니다.'
  }, {
    doc_id: 0,
    usr_id : '상암동개미투자자'
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
