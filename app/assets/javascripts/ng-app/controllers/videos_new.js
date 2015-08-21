(function(){
  'use strict';

  angular.module('app').controller('VideosNewCtrl',
    ['$stateParams', 'Line', 'Video', VideosNewCtrl]);

  function VideosNewCtrl($stateParams, Line, Video) {
    console.log('VideosNewCtrl called');

    var vm = this;
    vm.line = {};

    init();

    function init() {
      getLine($stateParams.line);
    }

    function getLine(id) {
      Line.get(id).then(function(data) {
        console.log(data)
        vm.line = data;
      });
    }

    function buildVideo(data, line) {
      return new Video({
        ziggeoId: data.token,
        playId: line.playId,
        scene: line.scene,
        lineId: line.id,
        img_url: data.embed_image_url,
        video_url: data.embed_video_url
      });
    }

    function createVideo(video) {
      video.create().then(function(data) {
        vm.line.video = data;
        console.log('Video created:', data)
      });
    }

    // TODO: Move Ziggeo code in open-source service to be injected into the
    // controller.
    //
    ZiggeoApi.Events.on('submitted', function(data) {
      createVideo(buildVideo(data.video, vm.line));
      console.log('ziggeoVideoData', data)
    });

  }
})();
