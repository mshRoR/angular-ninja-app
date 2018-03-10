(function(){
  'use strict';

  angular.module('ninjaApp')
  .component('contact', {
    controller: ContactController,
    templateUrl: 'app/contact/contact.html'
  });

  function ContactController($state){
    var self = this;
    self.sendMessage = function sendMessage(){
      console.log(self.contact);
      $state.go('contact-success');
    }
  }
})();
