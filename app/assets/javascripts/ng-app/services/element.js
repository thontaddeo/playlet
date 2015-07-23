(function(){
  'use strict';

  angular.module('app.services').factory('Element',
    ['railsResourceFactory', Element]);

  function Element(railsResourceFactory) {
    var resource = railsResourceFactory({
      url: '/api/elements',
      name: 'element'
    });

    resource.prototype.isLine = function() {
      return this.type === 'Line';
    };

    resource.prototype.isDirection = function() {
      return this.type === 'Direction';
    };

    return resource;
  }

})();
