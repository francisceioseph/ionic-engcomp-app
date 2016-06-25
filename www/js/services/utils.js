angular.module('App')
  .service('utils', function(){
    this.openUrlInBrowser = function(url){
      window.open(url, '_system', 'location=yes');
      return false;
    };
  });
