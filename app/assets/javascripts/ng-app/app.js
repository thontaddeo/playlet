this.app = angular.module('playlet', [
  'playlet.services',
  'templates',
  'angular.filter',
  'ngRoute'
]);

// Rails CSRF protection compatibility
this.app.config([
  '$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);

this.app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'SceneCtrl',
        reloadOnSearch: false
      }).
      when('/lines/:id', {
        templateUrl: 'show.html',
        controller: 'LineShowCtrl'
      });
  }
]);

this.app.run(function() {
  console.log('angular app running')
});
