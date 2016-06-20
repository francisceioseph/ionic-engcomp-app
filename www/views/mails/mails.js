angular.module('App')
.controller('TeacherMailsController', function($scope, $ionicPopup, TeacherEmails){
  $scope.emails = TeacherEmails.emails;
});
