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

.factory('$ZiggeoEmbed', ['$window', function () {
  return ZiggeoApi.Embed
}])

.factory('$ZiggeoStyles', ['$window', function () {
  return ZiggeoApi.Styles
}])


.directive('ziggeoAngular', function($ZiggeoEmbed) {
  return {
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function(scope, element, attrs) {
      $ZiggeoEmbed.embed(element, {
        video: scope.options.video,
        width: 340
      });
    }
  };
});