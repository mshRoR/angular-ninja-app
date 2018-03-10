// angular.module('ninjaApp')
//   .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
//     $locationProvider.hashPrefix('');
//
//     $routeProvider
//       .when('/home', {
//         templateUrl: 'app/home/home.html',
//         controller: 'NinjaListController'
//       })
//       .when('/contact', {
//         templateUrl: 'app/contact/contact.html',
//         controller: 'ContactController'
//       })
//       .when('/contact-success', {
//         templateUrl: 'app/contact/contact-success.html',
//         controller: 'ContactController'
//       })
//       .when('/ninjas-list', {
//         templateUrl: 'app/ninjasList/ninjas-list.html',
//         controller: 'NinjaListController'
//       })
//       .otherwise({
//         redirectTo: '/home'
//       });
// }]);
angular.module('ninjaApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
      })
      .state('contact', {
        url: '/contact',
        template: '<contact></contact>'
        // component: 'contact'
      })
      .state('contact-success', {
        url: '/contact-success',
        templateUrl: 'app/contact/contact-success.html'
      })
      .state('ninjas-list', {
        url: '/ninjas-list',
        template: '<ninja-list></ninja-list>'
      });

      $urlRouterProvider.otherwise('/home');
  });
