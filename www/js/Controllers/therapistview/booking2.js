angular.module('starter.controllers')
  .controller('therapistviewBooking2Ctrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http) {
      
          $scope.goToOffice = function(){
          $state.go('/TherapistBooking');
          };
      }   
  ]);