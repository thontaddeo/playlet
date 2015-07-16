this.app.controller('VideosCtrl', ['$scope', 'Video', 'Play',
  function($scope, Video, Play) {

  console.log('VideoCtrl called');

  Play.get(1).then(function(play) {
    $scope.play = play;
    console.log('Play', play);
  });

  // Video.query().then(function(videos) {
  //   $scope.videos = videos;
  //   console.log(videos);
  // });

}]);
