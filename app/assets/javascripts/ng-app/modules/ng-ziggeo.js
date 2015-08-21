angular.module('angular-ziggeo', [])

.factory('$ZiggeoEvents', ['$window', function () {
  return ZiggeoApi.Events
}])

.factory('$ZiggeoStreams', ['$window', function () {
  return ZiggeoApi.Streams
}])

.factory('$ZiggeoVideos', ['$window', function () {
  return ZiggeoApi.Videos
}])

.factory('$ZiggeoStyles', ['$window', function () {
  return ZiggeoApi.Styles
}])


.directive('ziggeoAngular', function() {
  return {
    restrict: 'E',
    scope: {
      options: '=options'
    },
    templateUrl: 'ziggeo.html'
  };
});