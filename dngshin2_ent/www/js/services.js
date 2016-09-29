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

.factory('Reports', function($firebaseArray,$localstorage) {

  var ref = firebase.database().ref().child("reqcontent");
  var contents = $firebaseArray(ref);
  var reports = new Array();
  var report_chks = new Array();
  var report_length = 0;
  var cnt = 0;

  contents.$loaded(function(){
      for(var i=0; i < contents.length ; i++){
        for(var key in contents[i].no){
          var tmpObj = contents[i].no[key];
          var d = new Date(tmpObj.date);
          tmpObj.date = (d.getFullYear() + '.') + (d.getMonth()+1)+'.'+(d.getDate()+1)+'. ' + d.getHours() + ":" + d.getMinutes();
          tmpObj.id = cnt;
          tmpObj.key = key;
          var flag = 0;
          for(var can_key in tmpObj.candidate_bup){
            if($localstorage.get("authData") === can_key){
              flag = 1;
              report_chks.push(tmpObj);
              break;
            }
          }
          if(flag === 0){
            cnt++;
            reports.push(tmpObj);
          }
        }
      }
  });

  return {
    all: function() {
      return reports;
    },
    get: function(reportId) {
          console.log(reports[reportId]);
          return reports[reportId];
    },
    leng: function(){
      return report_length;
    },
    allChks: function(){
      return report_chks;
    },
    getChks :function(report_chkID){
      return report_chks[report_chkID];
    },
    lengChks : function(){
      return report_chks.length;
    }
  };
})



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
});
