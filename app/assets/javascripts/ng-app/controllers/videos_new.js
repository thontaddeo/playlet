(function() {
  'use strict';

  angular.module('app').controller('VideosNewCtrl',
    ['$stateParams', '$ZiggeoEmbed', 'Line', 'Video', VideosNewCtrl]);

  function VideosNewCtrl($stateParams, $ZiggeoEmbed, Line, Video) {
    console.log('VideosNewCtrl called');

    var vm = this;
    vm.line = {};

    init();

    function init() {
      getLine($stateParams.line);
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

    function getLine(id) {
      Line.get(id).then(function(data) {
        vm.line = data;
        if (angular.isDefined(vm.line.video)) {
          loadVideo(data.video.ziggeoId);
        }
      });
    }

    function loadVideo(ziggeoId) {
      $ZiggeoEmbed.embed("#video-player", { video: ziggeoId, width: 340 });
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
