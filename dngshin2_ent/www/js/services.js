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

          tmpObj.key = key;
          var flag = 0;
          for(var can_key in tmpObj.candidate_bup){
            if($localstorage.get("authData") === can_key){
              flag = 1;
              tmpObj.id = report_chks.length;
              report_chks.push(tmpObj);
              break;
            }
          }
          if(flag === 0){
            tmpObj.id = reports.length;
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
});
