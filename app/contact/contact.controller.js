angular.module('ninjaApp')
  .controller('ContactController', ContactController);

function ContactController($scope, $location){
  $scope.sendMessage = function sendMessage(){
    console.log($scope.contact);
    $location.path('contact-success');
  }
}
