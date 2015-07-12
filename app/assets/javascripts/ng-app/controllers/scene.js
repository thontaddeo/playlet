this.app.controller('SceneCtrl', ['$scope', 'Element', function($scope, Element) {

  console.log('SceneCtrl called');

  Element.query().then(function(elements) {
    $scope.elements = elements;
    console.log(elements);
    // $scope.roles = selectRoles(elements);
  });

  // var selectRoles = function(lines) {
  //   var roles = []
  //   angular.forEach(lines, function(line) {
  //     roles.push(line.role);
  //   })
  //   return roles;
  // }

}]);
