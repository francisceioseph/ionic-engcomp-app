angular.module('App')
.config(function($stateProvider){
  $stateProvider
  .state('phones', {
    url: '/phones',
    templateUrl: 'templates/phones.html',
  });
});
