angular.module('ninjaApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'NinjaListController'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController'
      })
      .when('/contact-success', {
        templateUrl: 'app/contact/contact-success.html',
        controller: 'ContactController'
      })
      .when('/ninjas-list', {
        templateUrl: 'app/ninjasList/ninjas-list.html',
        controller: 'NinjaListController'
      })
      .otherwise({
        redirectTo: '/home'
      });
}]);
