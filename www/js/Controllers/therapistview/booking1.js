angular.module('starter.controllers')
  .controller('therapistviewBookingCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http) {
          
          $scope.goToOffice = function(){
          $state.go('/Booking2');
          };
      }   
  ]);