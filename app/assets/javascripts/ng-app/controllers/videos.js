(function() {
  'use strict';

  angular.module('app').controller('VideosCtrl',
    ['Scene', VideosCtrl]);

  function VideosCtrl(Scene) {

    var vm = this;
    vm.defaultVideo = undefined;
    vm.getScenes = getScenes;
    vm.scenes = [];
    init();

    function init() {
      getScenes({ offset: 0, limit: 3 }).then(function(scenes) {
        vm.scenes = scenes;
        console.log("Scenes loaded:", vm.scenes);
      });
    }

    function getScenes(params) {
      return Scene.query(params).then(function(data) {
        return data;
      });
    }
  }

})();
