(function(){
  'use strict';

  angular.module('app.services').factory('Element',
    ['railsResourceFactory', Element]);

  function Element(railsResourceFactory) {
    return railsResourceFactory({ url: '/api/elements', name: 'element' });
  }

})();
