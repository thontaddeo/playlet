(function(){
  'use strict';

  angular.module('app', [
    'app.services',
    'templates',
    'angular.filter',
    'ui.router'
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
        controller: 'LineCtrl as vm'
      })
      .state('videosIndex', {
        url: '/videos',
        templateUrl: 'videos/index.html',
        controller: 'VideosCtrl as vm'
      })
      .state('videosNew', {
        url: '/videos/new',
        templateUrl: 'videos/new.html',
        controller: 'VideoNewCtrl as vm'
      });
  });

  angular.module('app').run(function() {
    console.log('angular app running')
  });

})();
