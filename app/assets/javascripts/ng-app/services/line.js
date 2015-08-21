(function(){
  'use strict';

  angular.module('app.services').factory('Line',
    ['railsResourceFactory', 'railsSerializer', Line]);

  function Line(railsResourceFactory, railsSerializer) {
    return railsResourceFactory({
      url: '/api/lines',
      name: 'line',
      serializer: railsSerializer(function() {
        this.resource('role', 'Role');
      })
    })
  }

})();
