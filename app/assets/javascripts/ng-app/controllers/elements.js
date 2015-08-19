(function(){
  'use strict';

  angular.module('app').controller('ElementsCtrl',
    ['Play', 'Scene', '$filter', ElementsCtrl]);

  function ElementsCtrl(Play, Scene, $filter) {
    console.log('ElementsCtrl loaded')

    var vm = this;
    var paginationOffset = 0;
    vm.infiniteScrollEnabled = false;
    vm.getScenes = getScenes;
    vm.scenes = [];
    vm.selectedLineId = undefined;

    init();

    function init() {
      getScenes();
    }

    function getScenes() {
      vm.infiniteScrollEnabled = false;
      return Scene.query({ offset: paginationOffset }).then(function(data) {
        console.log('Scenes loaded:', data);

        vm.scenes = vm.scenes.concat(data);
        paginationOffset += 3;

        if (data.length > 0) { vm.infiniteScrollEnabled = true; }
        return data;
      });
    }
  }

})();
