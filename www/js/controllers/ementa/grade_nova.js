angular.module('App')
.config(function($stateProvider){
  $stateProvider
  .state('ementas.nova', {
    url: '/grade-nova',
    views: {
      'grade-nova-tab': {
        templateUrl: 'templates/ementas-novas-tab.html',
        controller: 'GradeNovaController'
      }
    }
  })
})

.controller('GradeNovaController', function($scope, BriefEmentasNovas){
  $scope.briefs = BriefEmentasNovas.briefs

  $scope.onSeeMoreClick = function(url){
    console.log(url);
    window.open(url, '_system', 'location=yes');
    return false;
  };
});
