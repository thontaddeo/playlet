(function(){
  'use strict';

  angular.module('app').controller('VideoNewCtrl',
    ['$scope', '$location', 'Line', 'Video', VideoNewCtrl]);

  function VideoNewCtrl() {
    console.log('VideoNewCtrl called');

    var vm = this;
    vm.line = {};
    vm.video = {};

    init();

    function init() {
      getLine($location.$$search.line);
    }

    function getLine(id) {
      Line.get(id).then(function(data) {
        vm.line = data;
      });
    }

    function buildVideo(data, line) {
      return new Video({
        ziggeoId: data.token,
        playId: line.playId,
        scene: line.scene,
        lineId: line.id,
        ziggeo_img_url: data.embed_image_url
      });
    }

    function createVideo(video) {
      video.create().then(function(data) {
        vm.video = data;
        console.log('Video created:', data)
      });
    }

    // TODO: Move Ziggeo code in open-source service to be injected into the
    // controller.
    //
    ZiggeoApi.Events.on('submitted', function(data) {
      vm.video = data.video;
      createVideo(buildVideo(vm.video, vm.line));
      console.log('ziggeoVideoData', data)
    });

  }
})();
