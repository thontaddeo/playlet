(function(){
  'use strict';

  angular.module('app').controller('RolesCtrl',
    ['Role', RolesCtrl]);

  function RolesCtrl(Play) {
    console.log('RolesCtrl loaded');

    var vm = this;
  }

})();
