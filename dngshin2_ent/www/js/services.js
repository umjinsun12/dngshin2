angular.module('starter.services', [])

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

.factory('Userinfo', function() {
  var userinfo = {
    email : null,
    ptel : null,
    company_name : null,
    main_tel : null,
    main_ptel : null,
    main_fax : null,
    address : null,
    activity_area1 : null,
    activity_area2 : null,
    bussiness_num : null,
    hello_msg : null
  }

  return{
    all: function(){
      return userinfo;
    },
    setall: function(uinfo){
      userinfo = uinfo;
    },
    setEmail: function(email){userinfo.email = email;console.log("userinfo.email",userinfo.email)},
    setPtel: function(ptel){userinfo.ptel = ptel;},
    setCompany_name: function(company_name){userinfo.company_name = company_name;},
    setMain_tel: function(main_tel){userinfo.main_tel = main_tel;},
    setMain_ptel: function(main_ptel){userinfo.main_ptel = main_ptel;},
    setMain_fax: function(main_fax){userinfo.main_fax = main_fax;},
    setAddress: function(address){userinfo.address = address;},
    setActivity_area1: function(activity_area1){userinfo.activity_area1 = activity_area1;},
    setActivity_area2: function(activity_area2){userinfo.activity_area2 = activity_area2;},
    setBussiness_num: function(bussiness_num){userinfo.bussiness_num = bussiness_num;},
    setHello_msg: function(hello_msg){userinfo.hello_msg = hello_msg;},

    getEmail: function(){return userinfo.email;},
    getPtel: function(){return userinfo.ptel;},
    getCompany_name: function(){return userinfo.company_name;},
    getMain_tel: function(){return userinfo.main_tel;},
    getMain_ptel: function(){return userinfo.main_ptel;},
    getMain_fax: function(){return userinfo.main_fax;},
    getAddress: function(){return userinfo.address;},
    getActivity_area1: function(){return userinfo.activity_area1;},
    getActivity_area2: function(){return userinfo.activity_area2;},
    getBussiness_num: function(){return userinfo.bussiness_num;},
    getCompany_name: function(){return userinfo.company_name;},
    getHello_msg: function(){return userinfo.hello_msg;}

  };
})

.factory('Chats', function() {
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
