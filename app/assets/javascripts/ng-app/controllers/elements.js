(function(){
  'use strict';

  angular.module('app').controller('ElementsCtrl',
    ['Play', 'Scene', '$filter', ElementsCtrl]);

  function ElementsCtrl(Play, Scene, $filter) {
    console.log('ElementsCtrl loaded')

    var vm = this;
    vm.elements = [];
    vm.play = {};
    vm.roles = [];
    vm.scenes = [];
    vm.selectedLineId = undefined;

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

    // (function(){
    //   getPlay(1).then(function(play){
    //     vm.roles = play.roles;
    //     vm.elements = play.elements;
    //     selectRole(vm.roles[0].id);
    //     assignRoleToElements(vm.elements, vm.roles);
    //   });
    // })()

    function assignRoleToElements(elements, roles) {
      angular.forEach(elements, function(element) {
        if (element.isLine()) {
          element.role = $filter('filter')(roles, { id: element.roleId })[0];
        }
      });
    }

    function getPlay(id) {
      return Play.get(id).then(function(data) {
        console.log('Play loaded:', data);
        vm.play = data;
        return vm.play;
      });
    }

    function selectRole(id) {
      vm.selectedRoleId = id;
    }
  }

})();
