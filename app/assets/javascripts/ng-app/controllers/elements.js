(function(){
  'use strict';

  angular.module('app').controller('ElementsCtrl',
    ['Play', '$scope', '$filter', ElementsCtrl]);

  function ElementsCtrl(Play, $scope, $filter) {
    console.log('ElementsCtrl loaded')

    var vm = this;
    vm.elements = [];
    vm.play = {};
    vm.roles = [];
    vm.selectedRoleId = undefined;
    vm.selectRole = selectRole;

    (function(){
      getPlay(1).then(function(play){
        vm.roles = play.roles;
        vm.elements = play.elements;
        selectRole(vm.roles[0].id);
        assignRoleToElements(vm.elements, vm.roles);
      });
    })()

    function assignRoleToElements(elements, roles) {
      angular.forEach(elements, function(element) {
        element.role = $filter('filter')(roles, { id: element.roleId })[0];
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
