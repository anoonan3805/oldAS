// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'pascalprecht.translate', 'SSFConfig', 'SSFCache', 'SSFAlerts', 'SSFLogout', 'SSFFavorites', 'SSFMailComposer',
  'SSFSpinner', 'SSFTranslate', 'RESTServices', 'officeBookingservice'
])

.run(["$ionicPlatform", '$window', '$ionicHistory', '$state', '$rootScope',
    function($ionicPlatform, $window, $ionicHistory, $state, $rootScope) {

      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
        // Ionic.io();
        // //Dispatch interval, how often do we want our events to be sent to analytics. Default is 30 sec
        // if($window.localStorage["userId"]) {
        //   $ionicAnalytics.setGlobalProperties({
        //     ZibID: $window.localStorage["userId"]
        //   });
        // }
      });
    }
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('wizard');
      $stateProvider

      //wizards folder
        .state('wizard', {
          url: '/wizard',
          templateUrl: 'templates/wizard/wizard.html',
          controller: 'wizardCtrl'
        })
        //forms
        .state('login', {
          url: '/login',
          templateUrl: 'templates/forms/login.html',
          controller: 'loginCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'templates/forms/register.html',
          controller: 'RegisterCtrl'
        })
        //Therapist
        .state('tabs', {
          // abstract:true,
          url: '/tabs',
          templateUrl: 'templates/therapistview/tabs.html'
        })
        .state('tabs.TherapistProfile', {
          url: '/TherapistProfile',
          cache: false,
          views: {
            'TherapistProfile': {
              templateUrl: 'templates/therapistview/TherapistProfile.html',
              controller: 'therapistProfileCtrl'
            }

          }
        })

      .state('tabs.TherapistLanding', {
          url: '/TherapistLanding',
          cache: false,
          views: {
            'TherapistLanding': {
              templateUrl: 'templates/therapistview/TherapistLanding.html',
              controller: 'therapistviewLandingCtrl'
            }

          }
        })
        .state('tabs.Clients', {
          url: '/Clients',
          cache: false,
          views: {
            'Clients': {
              templateUrl: 'templates/therapistview/Clients.html',
              controller: 'therapistviewClientCtrl'
            }

          }
        })
        .state('tabs.Sessions', {
          url: '/Sessions',
          cache: false,
          views: {
            'Sessions': {
              templateUrl: 'templates/therapistview/Sessions.html',
              controller: 'therapistviewSessionCtrl'
            }
          }

        })
        .state('/bookOffice', {
          url: '/therapistview/bookOffice',
          templateUrl: 'templates/therapistview/bookOffice.html',
          cache:false,
          controller: 'officeBookingCtrl'
        })
        .state('TherapistConfirmation', {
          url: '/therapistview/confirmation',
          templateUrl: 'templates/therapistview/confirmation.html',
          controller: 'confirmationCtrl'
        })
        .state('/Booking2', {
          url: '/therapistview/booking2',
          templateUrl: 'templates/therapistview/booking2.html',
          controller: 'bookingCtrl'

        })
        .state('/Bookingtest', {
          url: '/therapistview/bookingtest',
          templateUrl: 'templates/therapistview/bookingtest.html',
          controller: 'bookingCtrltest'

        })
        .state('/clientProfile', {
          url: '/therapistview/clientProfile',
          templateUrl: 'templates/therapistview/clientProfile.html',
          controller: 'therapistviewClientProfileCtrl'
        })

      .state('/reserveOffice', {
          url: '/therapistview/reserveOffice',
          templateUrl: 'templates/therapistview/reserveOffice.html',
        })
        .state('/Messages', {
          url: '/therapistview/Messages',
          templateUrl: 'templates/therapistview/Messages.html',
        })
        .state('/Messaging', {
          url: 'therpistview/Messaging',
          templateUrl: 'templates/therapistview/Messaging.html',
        })

      .state('/addNewClient', {
          url: '/therapistview/addNewClient',
          templateUrl: 'templates/therapistview/addNewClient.html',
        })
        .state('/history', {
          url: 'therapistview/history',
          templateUrl: 'templates/therapistview/history.html',
        })
        .state('/editMyProfile', {
          url: '/therapistview/editMyProfile',
          templateUrl: 'templates/therapistview/editMyProfile.html',
        })
        //Client View
        .state('clientTabs', {
          // abstract:true,
          url: '/clientTabs',
          templateUrl: 'templates/clientview/clientTabs.html'
        })

      .state('clientTabs.profile', {
          url: '/profile',
          cache: false,
          views: {
            'profile': {
              templateUrl: 'templates/clientview/profile.html',
              controller: 'clientviewProfileCtrl'
            }
          }
        })
        .state('clientTabs.messages', {
          url: '/messages',
          cache: false,
          views: {
            'messages': {
              templateUrl: 'templates/clientview/messages.html',
              controller: 'clientviewMessagesCtrl'
            }
          }
        })
        .state('clientTabs.landing', {
          url: '/landing',
          cache: false,
          views: {
            'landing': {
              templateUrl: 'templates/clientview/landing.html',
              controller: 'clientviewLandingCtrl'
            }
          }
        })
        .state('reserveSession', {
          url: '/therapistview/reserveSession',
          templateUrl: 'templates/clientview/reserveSession.html',
        })
        .state('sessionRequest', {
          url: '/clientview/sessionRequest',
          templateUrl: 'templates/clientview/sessionRequest.html',
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