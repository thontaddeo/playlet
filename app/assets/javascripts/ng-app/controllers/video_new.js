this.app.controller('VideoNewCtrl', ['$scope', 'Line', function($scope, Line) {

  console.log('VideoNewCtrl called');

  Line.query().then(function(lines) {
    $scope.lines = lines;
  });

}]);