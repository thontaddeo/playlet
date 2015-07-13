this.app.controller('VideoNewCtrl',
  ['$scope', '$location', 'Line', 'Video', function($scope, $location, Line, Video) {

  console.log('VideoNewCtrl called');

  Line.get($location.$$search.line).then(function(line) {
    $scope.line = line;
  });

  function createVideo(ziggeoData, line) {
    new Video({
      ziggeoId: ziggeoData.token,
      playId: line.playId,
      lineId: line.id
    }).create().then(function(data) {

      console.log('serverVideoData', data)
    });
  }

  ZiggeoApi.Events.on('submitted', function(data) {
    createVideo(data.video, $scope.line);
    console.log('ziggeoVideoData', data)
  });
}]);