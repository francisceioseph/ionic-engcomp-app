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
})
