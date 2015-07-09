angular.module('playlet.services').factory('Line', ['railsResourceFactory', function(railsResourceFactory) {
  return railsResourceFactory({ url: '/api/lines', name: 'line' });
}])
