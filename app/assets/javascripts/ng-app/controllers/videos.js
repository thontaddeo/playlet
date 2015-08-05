(function() {
  'use strict';

  angular.module('app').controller('VideosCtrl',
    ['Scene', VideosCtrl]);

  function VideosCtrl(Scene) {
    console.log('VideosCtrl Loaded')

    var vm = this;
    vm.scenes = [];
    vm.videos = [];
    vm.defaultVideo = undefined;

    init();

    function init() {
      getScenes({ offset: 0, limit: 3 }).then(function(scenes) {
        vm.scenes = scenes;
        console.log('Scenes loaded:', vm.scenes);
      });
    }

    function getScenes(params) {
      return Scene.query(params).then(function(data) {
        return data;
      });
    }
  }

})();
