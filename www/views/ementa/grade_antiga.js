angular.module('App')
.controller('GradeAntigaController', function($scope, BriefEmentas){
  $scope.briefs = BriefEmentas.briefs;

  $scope.onSeeMoreClick = function(url){
    console.log(url);
    window.open(url, '_system', 'location=yes');
    return false;
  };
});
