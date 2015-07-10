this.app.controller('RolesCtrl', ['$scope', 'Role', function($scope, Role) {

  console.log('RolesCtrl called');

  Role.query().then(function(roles) {
    $scope.roles = roles;
  });
}]);
