angular.module('App')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('ementas', {
      url: '/ementas',
      abstract: true,
      templateUrl: 'templates/ementas.html',
    })
  });
