angular.module('App')
.controller('EmentaController', function($scope, BriefEmentas){
  $scope.briefs = BriefEmentas.briefs;

  $scope.onSeeMoreClick = function(url){
    console.log(url);
    window.open(url, '_system', 'location=yes');
    return false;
  };
});
