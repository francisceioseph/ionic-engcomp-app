angular.module('App', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('get-started', {
    url: '/get-started',
    templateUrl: 'templates/get-started.html'
  })
  .state('links', {
    url: '/links',
    templateUrl: 'templates/links.html',
  })
  .state('about-ifce', {
    url: '/about-ifce',
    templateUrl: 'templates/about-ifce.html'
  })
  .state('about-developers', {
    url: 'about-developers',
    templateUrl: 'templates/about-developers.html'
  });

  // TODO: Descomentar assim que implementar essas funcionalidades
  // .state('news', {
  //   url: '/news',
  //   templateUrl: 'templates/news.html',
  //   controller: 'NewsController'
  // })
  // .state('labs', {
  //   url: '/labs',
  //   templateUrl: 'templates/labs.html'
  // })
  // .state('highlights', {
  //   url: '/highlights',
  //   templateUrl: 'templates/highlights.html'
  // })
  // .state('yearbook', {
  //   url: '/yearbook',
  //   templateUrl: 'templates/yearbook.html'
  // })

  $urlRouterProvider.otherwise('/get-started');
});
