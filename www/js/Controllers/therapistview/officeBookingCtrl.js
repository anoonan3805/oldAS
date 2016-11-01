angular.module('starter.controllers')
  .controller('officeBookingCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http', 'officeBookingservice', 'bookOfficeRest',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http, officeBookingservice, bookOfficeRest) {




      //   { 
      //   "sessionInfo": [ 
      //     {
      //     date:11/20/2016,
      //     reservationInfo:  {"8:00am":"true","userID:"333"}
      //     },
      //     {
      //     date:11/22/2016,
      //     reservationInfo:  {"8:00am":"true","userID:"333"}
      //     },
      //     {
      //     date:11/21/2016,
      //     reservationInfo:  {"8:00am":"true","userId:"333"}
      //     }
      //   ],
      //   "officeId": "7656",
      //   "id": "4567"
      // }







      // $scope.bookingInfo.officeId;
      // $scope.bookingInfo.reservedfromDate;
      // $scope.bookingInfo.hour;


      // Hours for dropdown menu -added additional hours -jp(10/31)
      $scope.hours = [{
        "hour": "9:00AM"
      }, {
        "hour": "10:00AM"
      }, {
        "hour": "11:00AM"
      }, {
        "hour": "12:00AM"
      }, {
        "hour": "1:00PM"
      }, {
        "hour": "2:00PM"
      }, {
        "hour": "3:00PM"
      }, {
        "hour": "4:00PM"
      }, {
        "hour": "5:00PM"
      }];

      //Post booking information to the backend 


      $scope.bookingInfo={
        officeId:123
      };
      console.log($scope.bookingInfo);


      // Call the setbooking service in order to view data on the following page
      $scope.setBooking = function(form) {
       
        console.log($scope.bookingInfo);


        bookOfficeRest.post($scope.bookingInfo).then(function(response) {
          console.log($scope.bookingInfo);


          if (response.status === 200) {
            // officeBookingservice.setbookingInfo($scope.bookingInfo);

            console.log("Form is Below");
            console.log(form);
            alert("Yes it has been sent to the backend!");
          }
        });


        $state.go('TherapistConfirmation');
      };

      // officeBookingservice.setbookingInfo($scope.bookingInfo);
      // $scope.test = officeBookingservice.getbookingInfo();

      //forcing the booking page to have a back button since this non-tab page is navigated to from a tab page
      $scope.goBack = function() {
        $ionicHistory.goBack();
      };

      //mock data needed for testing purposes -jp  
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

    }
  ]);
