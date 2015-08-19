(function(){
  'use strict';

  angular.module('app', [
    'app.services',
    'templates',
    'angular.filter',
    'ui.router',
    'angular-ziggeo',
    'infinite-scroll'
  ]);

  // Rails CSRF protection compatibility
  angular.module('app').config([
    '$httpProvider', function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
  ]);

  angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('elementsIndex', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'ElementsCtrl as vm'
      })
      .state('linesShow', {
        url: '/lines/:id',
        templateUrl: 'lines/show.html',
        controller: 'VideosNewCtrl as vm'
      })
      .state('videosIndex', {
        url: '/videos',
        templateUrl: 'videos/index.html',
        controller: 'VideosCtrl as vm'
      })
      .state('videosNew', {
        url: '/videos/new?line',
        templateUrl: 'videos/new.html',
        controller: 'VideosNewCtrl as vm'
      });
  });

  angular.module('app').run(function() {
    console.log('angular app running')
  });

})();
