angular.module('starter.controllers')
  .controller('therapistviewClientProfileCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http) {
      
        $scope.goBack = function(){
    $ionicHistory.goBack();
};  
      }   
  ]);
  
  