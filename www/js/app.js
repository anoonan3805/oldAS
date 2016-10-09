// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('wizard');
      $stateProvider
      
      //wizards folder
        .state('wizard', {
          url: '/wizard',
          templateUrl: 'templates/wizard/wizard.html',
          // controller: 'wizardCtrl'
        })
        .state('app.wizard', {
          url: '/wizard',
          templateUrl: 'templates/wizard/wizard.html',
          // controller: 'wizardCtrl'
        })
        //forms
        .state('login', {
          url: '/login',
          templateUrl: 'templates/forms/login.html',
          // controller: 'LoginCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'templates/forms/register.html',
          // controller: 'RegisterCtrl'
        })
        //Therapist
        .state('TherapistMyProfile', {
          url: '/therapistview/myProfile',
          cache: false,
          templateUrl: 'templates/therapistview/profile.html',
          // controller: 'therapistviewProfileCtrl'
        })
        .state('TherapistLanding', {
          url: '/therapistview/landing',
          templateUrl: 'templates/therapistview/landing.html',
          // controller: 'therapistviewLandingCtrl'
        })
        .state('TherapistTodo', {
          url: '/therapistview/todo',
          templateUrl: 'templates/therapistview/todo.html',
          // controller: 'therapistviewSessionCtrl'
        })
        //Client View
        .state('ClientMyProfile', {
          url: '/clientview/myProfile',
          cache: false,
          templateUrl: 'templates/clientview/profile.html',
          // controller: 'clientviewProfileCtrl'
        })
        .state('ClientLanding', {
          url: '/clientview/landing',
          templateUrl: 'templates/clientview/landing.html',
          // controller: 'clientviewLandingCtrl'
        })
        .state('ClientTodo', {
          url: '/clientview/todo',
          templateUrl: 'templates/clientview/todo.html',
          // controller: 'clientviewSessionCtrl'
        })

        //Debugging Navigation
        .state('navigation', {
          url: '/navigation',
          template: '<ion-view hide-nav-bar="false" title="Navigation">' +
            '<ion-nav-buttons></ion-nav-buttons>' +
            '<ion-content class="padding">' +
            '<button class="button button-block button-calm ssf-button" ng-repeat="nav in navLinks" ui-sref="{{nav}}">{{nav}}</button>' +
            '</ion-content>' +
            '</ion-view>',
          controller: function($state, $scope) {
            var stateArray = $state.get();
            $scope.navLinks = [];
            for (var i in stateArray) {
              if (stateArray[i].name !== '' && stateArray[i].name !== 'navigation' && stateArray[i].name !== 'update') {
                $scope.navLinks.push(stateArray[i].name);
              }
            }
            $scope.navLinks.sort();
          }
        });
    }
  ]);
