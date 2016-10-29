angular.module('starter.controllers')
  .controller('officeBookingCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http','officeBookingservice',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http,officeBookingservice) {
    


   $scope.bookingInfo={
       somedata:"hey there"
    };

     
      officeBookingservice.setbookingInfo($scope.bookingInfo);
      

    $scope.bookingInfo={
       
    };
 $scope.bookingInfo.reservedby="Jadon Parker";
 $scope.bookingInfo.officeId;
 $scope.bookingInfo.reservedfromDate;
 $scope.bookingInfo.hour;
 $scope.bookingInfo.officeName;
 
 
 
  $scope.hours = [
    {"hour": "8:00AM"},
    {"hour": "9:00AM"},
    {"hour": "10:00AM"},
    {"hour": "11:00AM"}
  ];

 $scope.setBooking=function() {
   
        officeBookingservice.setbookingInfo($scope.bookingInfo);
  
        $state.go('/TherapistConfirmation')
 };
 
console.log($scope.bookingInfo.hour);
 
     
     
     
      officeBookingservice.setbookingInfo($scope.bookingInfo);
      $scope.test = officeBookingservice.getbookingInfo();
      
    
       
      $scope.officesArray = [{
        officeName: "Room A",
        buildingId: "4566",
        openTime: "2016-10-25",
        closeTime: "2016-10-25",
        id: "8974"
      }, {
        officeName: "Room B",
        buildingId: "4545",
        openTime: "2016-10-25",
        closeTime: "2016-10-25",
        id: "4454"
      }];

    


      $scope.goToOffice = function() {
        $state.go('/TherapistBooking');
      };
    }
  ]);
