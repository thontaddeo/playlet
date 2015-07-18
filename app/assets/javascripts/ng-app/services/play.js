(function(){
  'use strict';

  angular.module('app.services').factory('Play',
    ['railsResourceFactory', Play]);

  function Play(railsResourceFactory) {
    return railsResourceFactory({ url: '/api/plays', name: 'play' });
  }

})();
