this.app.controller('VideosCtrl', ['$scope', 'Video', function($scope, Video) {

  console.log('VideoCtrl called');

  Video.query().then(function(videos) {
    $scope.videos = videos;
    console.log(videos);
  });

}]);
