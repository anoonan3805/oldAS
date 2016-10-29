angular.module('starter.controllers')
  .controller('bookingCtrltest', ["$scope", "$window", "$rootScope","officeBookingservice",
    function($scope, $window, $rootScope, officeBookingservice) {

$rootScope.dateValue = new Date();
    $rootScope.timeValue = new Date();
    $rootScope.datetimeValue = new Date();
    
   
 
    }
  
  ]);