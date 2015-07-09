angular.module('playlet.services').factory('Line', ['railsResourceFactory', function(railsResourceFactory) {
  return railsResourceFactory({ url: '/lines', name: 'line' });
}])
