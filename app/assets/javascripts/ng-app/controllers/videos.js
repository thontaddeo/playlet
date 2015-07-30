(function() {
  'use strict';

  angular.module('app').controller('VideosCtrl',
    ['Video', 'Line', '$scope', '$filter', VideosCtrl]);

  function VideosCtrl(Video, Line, $scope, $filter) {
    console.log('VideosCtrl Loaded')

    var vm = this;
    vm.videos = [];
    vm.defaultVideo = undefined;
    vm.scenes = [1, 2];

    init();

    function init() {
      getLines({ 'scenes[]': vm.scenes }).then(function(lines) {
        vm.lines = lines;
        setDefaultVideo(lines);
        console.log('Lines loaded:', vm.lines);
      });
    }

    function getLines(params) {
      return Line.query(params).then(function(data) {
        return data;
      });
    }

    function setDefaultVideo(lines) {
      vm.defaultVideo = ($filter('first')(lines, 'video !== undefined')[0]).video;
    }
  }

})();
