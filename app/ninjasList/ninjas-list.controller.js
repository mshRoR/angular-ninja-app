angular.module('ninjaApp')
  // .controller('NinjaListController', ['$scope', '$http', function($scope, $http){
    // $scope.removeNinja = function removeNinja(ninja){
    //   console.log(ninja);
    //   var removeNinja = $scope.ninjas.indexOf(ninja);
    //   console.log(removeNinja);
    //   $scope.ninjas.splice(removeNinja, 1);
    // };
    //
    // $http.get('app/data/ninjas.json').then(function(response){
    //   console.log(response.data);
    //   $scope.ninjas = response.data;
    // });
  // }]);

  // .controller('NinjaListController', NinjaListController);

  // function NinjaListController($scope, $http){
  //   $scope.removeNinja = function removeNinja(ninja){
  //     console.log(ninja);
  //     var removeNinja = $scope.ninjas.indexOf(ninja);
  //     console.log(removeNinja);
  //     $scope.ninjas.splice(removeNinja, 1);
  //   };
  //
  //   $scope.addNinja = function addNinja() {
  //     console.log($scope.newninja);
  //     $scope.ninjas.push({
  //       name: $scope.newninja.name,
  //       belt: $scope.newninja.belt,
  //       rate: $scope.newninja.rate,
  //       available: true
  //     });
  //
  //     $scope.newninja.name = '';
  //     $scope.newninja.belt = '';
  //     $scope.newninja.rate = '';
  //   }
  //
  //   $scope.removeAll = function removeAll() {
  //     $scope.ninjas = [];
  //   }
  //
  //   $http.get('app/data/ninjas.json').then(function(response){
  //     console.log(response.data);
  //     $scope.ninjas = response.data;
  //   });
  // }

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
      // $http.get('app/data/ninjas.json').then(function(response){
        console.log(response);
        self.ninjas = response;
      });
    }
  }
