(function(){
  'use strict';

  angular.module('ninjaApp')
  .component('ninjaList', {
    controller: NinjaListController,
    templateUrl: 'app/ninjasList/ninjas-list.html'
  });

  function NinjaListController(NinjaListFactory){
    var self = this;
    self.removeNinja = function removeNinja(ninja){
      console.log(ninja);
      var removeNinja = self.ninjas.indexOf(ninja);
      console.log(removeNinja);
      self.ninjas.splice(removeNinja, 1);
    };

    self.addNinja = function addNinja() {
      console.log(self.newninja);
      self.ninjas.push({
        name: self.newninja.name,
        belt: self.newninja.belt,
        rate: self.newninja.rate,
        available: true
      });

      self.newninja.name = '';
      self.newninja.belt = '';
      self.newninja.rate = '';
    }

    self.removeAll = function removeAll() {
      self.ninjas = [];
    }

    self.$onInit = function(){

      NinjaListFactory.ninjasList().then(function(response){
        console.log(response);
        self.ninjas = response;
      });
    }
  }
})();
