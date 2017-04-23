angular.module('ninjaApp')
  .directive('topHeader', function(){
    return {
      scope: true,
      templateUrl: 'app/header/top-header.html'
    };
  });
