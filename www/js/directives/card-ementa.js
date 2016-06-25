angular.module('App')
  .directive('cardEmenta', function(){
    var configs = {
      restrict: 'E',
      scope: {
        'brief': '=brief'
      },
      replace: true,
      templateUrl: 'templates/directives/card-ementa.html',
      controller: ementaCardController
    };

    return configs;
  });

function ementaCardController($scope, utils) {
  $scope.onSeeMoreClick = utils.openUrlInBrowser;
};
