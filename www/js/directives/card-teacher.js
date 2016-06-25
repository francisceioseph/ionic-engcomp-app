angular.module('App')
  .directive('cardTeacher', function(){
    var configs = {
      restrict: 'E',
      scope: {
        teacher: '=teacher'
      },
      replace: true,
      templateUrl: 'templates/directives/card-teacher.html',
      controller: teacherCardController
    };

    return configs;
  });

function teacherCardController($scope, utils) {
  $scope.onSeeMoreClick = utils.openUrlInBrowser;
}
