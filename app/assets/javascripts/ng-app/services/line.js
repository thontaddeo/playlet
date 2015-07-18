(function(){
  'use strict';

  angular.module('app.services').factory('Line',
    ['railsResourceFactory', Line]);

  function Line(railsResourceFactory) {
    return railsResourceFactory({ url: '/api/lines', name: 'line' });
  }

})();
