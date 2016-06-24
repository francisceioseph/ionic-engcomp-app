angular.module('App')
.controller('NewsController', function($scope, News){
  $scope.news = News.data;
})
