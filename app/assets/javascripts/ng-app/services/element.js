angular.module('playlet.services').factory('Element', ['railsResourceFactory', function(railsResourceFactory) {
  return railsResourceFactory({ url: '/api/elements', name: 'element' });
}])
