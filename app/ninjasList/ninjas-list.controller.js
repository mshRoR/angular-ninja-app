angular.module('ninjaApp')
  .controller('NinjaListController', NinjaListController);
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

  function NinjaListController($scope, $http){
    $scope.removeNinja = function removeNinja(ninja){
      console.log(ninja);
      var removeNinja = $scope.ninjas.indexOf(ninja);
      console.log(removeNinja);
      $scope.ninjas.splice(removeNinja, 1);
    };

    $scope.addNinja = function addNinja() {
      console.log($scope.newninja);
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: $scope.newninja.rate,
        available: true
      });

      $scope.newninja.name = '';
      $scope.newninja.belt = '';
      $scope.newninja.rate = '';
    }

    $scope.removeAll = function removeAll() {
      $scope.ninjas = [];
    }

    $http.get('app/data/ninjas.json').then(function(response){
      console.log(response.data);
      $scope.ninjas = response.data;
    });
  }
