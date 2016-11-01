angular.module('starter.controllers')
  .controller('clientviewLandingCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope","sessionsREST",
   'SSFTranslateService', '$http',
    function($scope, $window, $state, $ionicHistory, $rootScope, sessionsREST,SSFTranslateService, $http) {
      
      $scope.reschedule = function(){
          $state.go('/SessionRequest');
          };
        
        
        
        $scope.sessions={};
        sessionsREST.getSessions() 
        .then(function(response) {
          if (response.status === 200) {
            $scope.sessions=response.data;
            console.log($scope.sessions);
          }
          else {
            SSFTranslateService.showAlert("{{ 'REQUESTS.NEWALERT2' | translate}}");
          }
        });
        
        
        
        
        
        
        
          
      }  
      

    
      
  ]);