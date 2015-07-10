angular.module('playlet.services').factory('Role', ['railsResourceFactory', function(railsResourceFactory) {
  return railsResourceFactory({ url: '/api/roles', name: 'role' });
}])
