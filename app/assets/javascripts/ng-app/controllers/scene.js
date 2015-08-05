(function() {
  'use strict';

  angular.module('app').controller('SceneCtrl',
    ['Scene', SceneCtrl]);

  function SceneCtrl(Scene ) {
    console.log('SceneCtrl Loaded')

    var vm = this;

    init();

    function init() {

    }
  }

})();
