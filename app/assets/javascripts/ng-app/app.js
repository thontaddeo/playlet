(function(){

  this.app = angular.module('app', [
    'app.services',
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
          controller: 'ElementsCtrl',
          reloadOnSearch: false,
          controllerAs: 'vm'
        }).
        when('/lines/:id', {
          templateUrl: 'lines/show.html',
          controller: 'LineCtrl'
        }).
        when('/videos', {
          templateUrl: 'videos/index.html',
          controller: 'VideosCtrl',
          controllerAs: 'vm'
        }).
        when('/videos/new', {
          templateUrl: 'videos/new.html',
          controller: 'VideoNewCtrl'
        });
    }
  ]);

  this.app.run(function() {
    console.log('angular app running')
  });

})();
