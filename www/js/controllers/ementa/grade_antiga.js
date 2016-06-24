angular.module('App')
.config(function($stateProvider){
  $stateProvider
  .state('ementas.antiga', {
    url: '/grade-antiga',
    views: {
      'grade-antiga-tab': {
        templateUrl: 'templates/ementas-antigas-tab.html',
        controller: 'GradeAntigaController'
      }
    }
  })
})

.controller('GradeAntigaController', function($scope, BriefEmentas){
  $scope.briefs = BriefEmentas.briefs;

  $scope.onSeeMoreClick = function(url){
    console.log(url);
    window.open(url, '_system', 'location=yes');
    return false;
  };
});
