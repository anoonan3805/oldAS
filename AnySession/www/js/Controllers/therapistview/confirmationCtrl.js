angular.module('starter.controllers')
  .controller('confirmationCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http','officeBookingservice',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http,officeBookingservice) {
  

      $scope.test=officeBookingservice.getbookingInfo();
      $scope.room =officeBookingservice.getRoom();
      $scope.date =officeBookingservice.getDate();
      $scope.time =officeBookingservice.getTime();
       

    


      // $scope.goToOffice = function() {
      //   $state.go('/TherapistBooking');
      // };
    }
  ]);
