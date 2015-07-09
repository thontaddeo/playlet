this.app.controller('LineIndexCtrl', ['$scope', 'Line', function($scope, Line) {

  Line.query().then(function(lines) {
    $scope.lines = lines;
  });
}]);
