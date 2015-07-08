this.app = angular.module('playlet', [
  'templates',
  'ngRoute'
]);

// for compatibility with Rails CSRF protection


app.run(function() {
  console.log('angular app running')
})
