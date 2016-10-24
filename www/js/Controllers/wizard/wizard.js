angular.module('starter.controllers')
    .controller('wizardCtrl', ['$scope','$ionicSlideBoxDelegate','$state','SSFConfigConstants','sessionsREST',
        function($scope,$ionicSlideBoxDelegate,$state,SSFConfigConstants,sessionsREST) {
            
            sessionsREST.getSessions().then(function(response){
                $scope.data=response;
                console.log(response);
            });

            $scope.startApp = function() {
                $state.go('login');
            };
            $scope.next = function() {
                $ionicSlideBoxDelegate.next();
            };
            $scope.previous = function() {
                $ionicSlideBoxDelegate.previous();
            };

            // Called each time the slide changes
            $scope.slideChanged = function(index) {
                $scope.slideIndex = index;
            };
            

        }
    ]);