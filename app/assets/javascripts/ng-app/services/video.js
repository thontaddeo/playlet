(function(){
  'use strict';

  angular.module('app.services').factory('Video',
    ['railsResourceFactory', Video]);

  function Video(railsResourceFactory) {
    return railsResourceFactory({ url: '/api/videos', name: 'video' });
  }

})();
