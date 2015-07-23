(function(){
  'use strict';

  angular.module('app.services').factory('Play',
    ['railsResourceFactory', 'railsSerializer', Play]);

  function Play(railsResourceFactory, railsSerializer) {
    return railsResourceFactory({
      url: '/api/plays',
      name: 'play',
      serializer: railsSerializer(function() {
        this.resource('elements', 'Element');
        this.resource('roles', 'Role');
      })
    });
  }

})();
