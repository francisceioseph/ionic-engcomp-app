angular.module('App')
.config(function($stateProvider){
  $stateProvider
  .state('mails', {
    url: 'mails',
    templateUrl: 'templates/mails.html',
    controller: 'TeacherMailsController'
  });
})

.controller('TeacherMailsController', function($scope, $ionicPopup, TeacherEmails){
  $scope.emails = TeacherEmails.emails;
});
