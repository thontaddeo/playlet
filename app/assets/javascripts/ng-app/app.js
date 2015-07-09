this.app = angular.module('playlet', [
  'templates',
  'ngRoute'
]);

// Rails CSRF protection compatibility
this.app.config([
  '$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);

// this.app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.

//   }
// ]);

this.app.run(function() {
  console.log('angular app running')
});
