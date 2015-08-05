(function(){
  'use strict';

  angular.module('app.services').factory('Scene',
    ['railsResourceFactory', 'railsSerializer', '$filter', Scene]);

  function Scene(railsResourceFactory, railsSerializer, $filter) {
    var resource = railsResourceFactory({
      url: '/api/scenes',
      name: 'scene',
      serializer: railsSerializer(function() {
        this.resource('elements', 'Element');
      })
    });

    resource.prototype.defaultVideo = function() {
      return ($filter('first')(this.lines, 'video !== undefined')[0]).video;
    };

    return resource;
  };

})();
