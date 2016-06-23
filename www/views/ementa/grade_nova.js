angular.module('App')
.controller('GradeNovaController', function($scope, BriefEmentasNovas){
  $scope.briefs = BriefEmentasNovas.briefs

  $scope.onSeeMoreClick = function(url){
    console.log(url);
    window.open(url, '_system', 'location=yes');
    return false;
  };
});
