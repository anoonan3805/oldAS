angular.module('starter.controllers')
  .controller('clientviewLandingCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http) {
      
      $scope.reschedule = function(){
          $state.go('/SessionRequest');
          };
          
      }   
  ]);