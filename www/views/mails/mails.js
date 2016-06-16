angular.module('App')
.controller('TeacherMailsController', function($scope, TeacherEmails){
  $scope.emails = TeacherEmails.emails;

  $scope.openMail = function(emailAddr){
    var email = {
      to: emailAddr,
      isHTML: true
    };

    window.plugin.email.open(email, this);
  };
});
