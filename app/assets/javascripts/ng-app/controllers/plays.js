(function(){
  'use strict';

  angular.module('app').controller('PlaysCtrl',
    ['Play', PlaysCtrl]);

  function PlaysCtrl(Play) {
    console.log('PlaysCtrl loaded');

    var vm = this;
    vm.elements = [];
    vm.play = {};
    vm.roles = [];

    init();

    function init() {
      getPlay(1).then(function(play){
        vm.roles = play.roles;
        vm.elements = play.elements;
      });
    }

    function getPlay(id) {
      return Play.get(id).then(function(data) {
        console.log('Play loaded:', data);
        vm.play = data;
        return vm.play;
      });
    }
  }

})();
