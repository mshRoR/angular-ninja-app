angular.module('ninjaApp')
  // .directive('randomNinja', RandomNinja);
  //
  // function RandomNinja(){
  //   return {
  //     restrict: 'E',
  //     scope: {
  //       ninjas: '=',
  //       title: '='
  //     },
  //     templateUrl: 'app/home/random-ninja.html',
  //     transclude: true,
  //     replace: true,
  //     controller: function($scope){
  //       $scope.random = Math.floor(Math.random() * 4);
  //     }
  //   }
  // }

  .component('randomNinja', {
    bindings: {
      title: '<',
      ninjas: '<'
    },
    transclude: true,
    controller: RandomNinja,
    templateUrl: 'app/home/random-ninja.html'
  });

  function RandomNinja(NinjaListFactory){
    var self = this;
    var random = Math.floor(Math.random() * 4);
    NinjaListFactory.ninjasList().then(function(response){
    // $http.get('app/data/ninjas.json').then(function(response){
      // console.log(response);
      console.log(random);
      self.ninja = response[random].thumb;      
    });
  }
