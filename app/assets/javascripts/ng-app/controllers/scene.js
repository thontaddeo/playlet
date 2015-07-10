this.app.controller('SceneCtrl', ['$scope', 'Line', function($scope, Line) {

  console.log('SceneCtrl called');

  Line.query().then(function(lines) {
    $scope.lines = lines;
    $scope.roles = selectRoles(lines);
  });

  var selectRoles = function(lines) {
    var roles = []
    angular.forEach(lines, function(line) {
      roles.push(line.role);
    })
    return roles;
  }

}]);
