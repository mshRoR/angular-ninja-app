angular.module('ninjaApp')
  .factory('NinjaListFactory', ninjaListFactory);

  function ninjaListFactory($http){
    return {
      ninjasList: function(){
        return $http.get('app/data/ninjas.json').then(function(response){
          return response.data;
        });
      }
    };
  }
