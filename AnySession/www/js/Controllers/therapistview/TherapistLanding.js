angular.module('starter.controllers')
  .controller('therapistviewLandingCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    'SSFUsersREST', 'SSFTranslateService', '$http',
    function($scope, $window, $state, $ionicHistory, $rootScope, SSFUsersREST,
      SSFTranslateService, $http) {
    
          $scope.goToSessions = function(){
        $state.go("/bookOffice");
          };
      }   
  ]);