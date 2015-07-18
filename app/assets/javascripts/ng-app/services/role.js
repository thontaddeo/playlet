(function(){
  'use strict';

  angular.module('app.services').factory('Role',
    ['railsResourceFactory', Role]);

  function Role(railsResourceFactory) {
    return railsResourceFactory({ url: '/api/roles', name: 'role' });
  }

})();
