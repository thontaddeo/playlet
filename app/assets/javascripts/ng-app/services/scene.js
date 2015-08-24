(function(){
  'use strict';

angular.module('app.services').factory('sceneInterceptor', function () {
  return {
    'afterResponse': function (result, resourceConstructor, context) {

      var scenes = angular.isArray(result) ? result : [result];
      angular.forEach(scenes, function(scene) {
        scene.selectedRoleId = scene.roles[0].id;
      });

      return result;
    }
  };
});

  angular.module('app.services').factory('Scene',
    ['railsResourceFactory', 'railsSerializer', 'sceneInterceptor','$filter', Scene]);

  function Scene(railsResourceFactory, railsSerializer, sceneInterceptor, $filter) {
    var resource = railsResourceFactory({
      url: '/api/scenes',
      name: 'scene',
      interceptors: [sceneInterceptor],
      serializer: railsSerializer(function() {
        this.resource('lines', 'Line');
        this.resource('directions', 'Direction');
        this.resource('roles', 'Role');
      })
    });

    resource.prototype.defaultVideoId = function() {
      var video = ($filter('first')(this.elements, 'video !== undefined')[0]).video;
      if (video) { return video.ziggeoId; }
    };

    return resource;
  };

})();
