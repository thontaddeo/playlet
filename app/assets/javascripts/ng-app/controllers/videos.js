(function() {
  'use strict';

  angular.module('app').controller('VideosCtrl',
    ['Play', VideosCtrl]);

  function VideosCtrl(Play) {
    console.log('VideosCtrl Loaded')

    var vm = this;
    vm.play = {};
    vm.roles = [];
    vm.elements = [];

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
