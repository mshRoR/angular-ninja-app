(function(){
  'use strict';

  angular.module('ninjaApp')
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
      console.log(random);
      self.ninja = response[random].thumb;      
    });
  }
})();
