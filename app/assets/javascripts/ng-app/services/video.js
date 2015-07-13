angular.module('playlet.services').factory('Video', ['railsResourceFactory', function(railsResourceFactory) {
  return railsResourceFactory({ url: '/api/videos', name: 'video' });
}])
