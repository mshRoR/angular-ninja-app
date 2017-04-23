angular.module('ninjaApp')
  .directive('randomNinja', RandomNinja);

  function RandomNinja(){
    return {
      restrict: 'E',
      scope: {
        ninjas: '=',
        title: '='
      },
      templateUrl: 'app/home/random-ninja.html',
      transclude: true,
      replace: true,
      controller: function($scope){
        $scope.random = Math.floor(Math.random() * 4);
      }
    }
  }
