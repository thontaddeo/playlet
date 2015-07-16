angular.module('playlet.services').factory('Play', ['railsResourceFactory', function(railsResourceFactory) {
  return railsResourceFactory({ url: '/api/plays', name: 'play' });
}])
