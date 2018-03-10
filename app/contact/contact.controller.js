angular.module('ninjaApp')
  // .controller('ContactController', ContactController);
  .component('contact', {
    // bindings: {
      // sendMessage: '='
    // },
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

// function ContactController($scope, $location){
//   $scope.sendMessage = function sendMessage(){
//     console.log($scope.contact);
//     $location.path('contact-success');
//   }
// }
