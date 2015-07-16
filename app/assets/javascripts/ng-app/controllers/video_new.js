this.app.controller('VideoNewCtrl', ['$scope', '$location', 'Line', 'Video',
  function($scope, $location, Line, Video) {

  console.log('VideoNewCtrl called');

  Line.get($location.$$search.line).then(function(line) {
    $scope.line = line;
  });

  function createVideo(data, line) {
    new Video({
      ziggeoId:       data.token,
      playId:         line.playId,
      scene:          line.scene,
      lineId:         line.id,
      ziggeo_img_url: data.embed_image_url
    }).create().then(function(data) {

      console.log('serverVideoData', data)
    });
  }

  ZiggeoApi.Events.on('submitted', function(data) {
    createVideo(data.video, $scope.line);
    console.log('ziggeoVideoData', data)
  });

}]);
