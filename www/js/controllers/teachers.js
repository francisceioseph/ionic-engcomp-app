angular.module('App')
.config(function($stateProvider){
  $stateProvider
  .state('teachers', {
    url: '/teachers',
    templateUrl: 'templates/teachers.html',
    controller: 'TeachersController'
  });
})

.controller('TeachersController', function($scope, Teachers){
  $scope.teachers = Teachers.data;

  $scope.onSeeMoreClick = function(url){
    window.open(url, '_system', 'location=yes');
    return false;
  };
})
