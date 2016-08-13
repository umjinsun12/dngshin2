angular.module('starter.services', [])

.factory('Bups', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bups = [{
    id: 0,
    name: '김영종',
    lastText: 'OTO 법무사사무소 (인천)',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '김소영',
    lastText: '법무사사무소 비즈온(연수구)',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '임종광',
    lastText: '가원법률사무소 변호사(남구)',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '이재한',
    lastText: '갈현법률사무소(갈현)',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '이재한',
    lastText: '갈현법률사무소(갈현)',
    face: 'img/mike.png'
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
        if (bups[i].id === parseInt(bupId)) {
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
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

});
