angular.module('App')
.controller('PhonesController', function($scope){
  $scope.openMail = function(emailAddr){
    var email = {
      to: emailAddr,
      isHTML: true
    };

    window.plugin.email.open(email, this);
  };
});
