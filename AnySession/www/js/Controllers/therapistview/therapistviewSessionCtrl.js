angular.module('starter.controllers')
    .controller('therapistviewSessionCtrl', ["$scope", "$ionicScrollDelegate",
        function($scope, $ionicScrollDelegate) {

            var startHour = 7;
            var endHour = 21;
            var usehalfhour = true;

            $scope.timerleft = '0px';

            $scope.hours = getHours();
            $scope.rooms = getRooms();
            $scope.days = getDays();
            $scope.events = getEvents();

            function getHours() {
                var tmp = [];
                for (i = startHour; i <= endHour; i++) {
                    tmp.push(('0' + i).slice(-2) + ':00');
                    if (usehalfhour && i < endHour) {
                        tmp.push(('0' + i).slice(-2) + ':30');
                    }
                }

                return tmp;
            }


            function getRooms() {
                var tmp = [];
                tmp.push({
                    id: 1,
                    name: 'MV Office 11'
                });
                tmp.push({
                    id: 2,
                    name: 'MV Office 12'
                });
                tmp.push({
                    id: 3,
                    name: 'MV Office 13'
                });
                tmp.push({
                    id: 4,
                    name: 'MV Office 14'
                });

                return tmp;
            }

            function getDays() {
                var tmp = [];
                var date1 = new Date();
                var date2 = new Date();
                date2.setDate(date2.getDate() + 1);
                var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

                var monthname = new Array(12);
                monthname[0] = "January";
                monthname[1] = "February";
                monthname[2] = "March";
                monthname[3] = "April";
                monthname[4] = "May";
                monthname[5] = "June";
                monthname[6] = "July";
                monthname[7] = "August";
                monthname[8] = "September";
                monthname[9] = "October";
                monthname[10] = "November";
                monthname[11] = "December";


                tmp.push({
                    day: weekday[date1.getDay()],
                    longdate: weekday[date1.getDay()] + ', ' + monthname[date1.getMonth()] + ' ' + date1.getDate() + ', ' + date1.getFullYear(),
                    datevalue: date1,
                    dateformat: date1.toLocaleDateString()
                });
                tmp.push({
                    day: weekday[date2.getDay()],
                    longdate: weekday[date2.getDay()] + ', ' + monthname[date2.getMonth()] + ' ' + date2.getDate() + ', ' + date2.getFullYear(),
                    datevalue: date2,
                    dateformat: date2.toLocaleDateString()
                });
                console.log(tmp);
                return tmp;
            }

            $scope.gotScrolled = function() {

                $scope.timerleft = $ionicScrollDelegate.getScrollPosition().left + 'px';
                $scope.$apply();

            };

            function getEvents() {
                var tmp = [];
                var date1 = new Date();     
                tmp.push({
                    eventname: 'Reserved by Kathrin',
                    starthour: '08:00',
                    endhour: '09:00',
                    eventtype: 'ion-mic-c',                     // icon
                    room: 'MV Office 11',                       // location name
                    left: (60 + 0 * 120) + 'px',                // location column
                    top: (23 + 1 * 100) + 'px',                 // the row position
                    height: (1.5 * 100) + 'px',                 //how long is the session
                    color: 'rgba(0,157,151,0.75)',              //color of box
                    dateformat: date1.toLocaleDateString()
                });
                tmp.push({
                    eventname: 'Reserved by Oscar',
                    starthour: '09:30',
                    endhour: '10:30',
                    eventtype: 'ion-coffee',
                    room: 'MV Office 12',
                    left: (60 + 2 * 120) + 'px',
                    top: (23 + 2.5 * 100) + 'px',
                    height: (1.5 * 100) + 'px',
                    color: 'rgba(0,157,151,0.75)',
                    dateformat: date1.toLocaleDateString()
                });
                tmp.push({
                    eventname: 'Reserved by Jadon',
                    starthour: '10:30',
                    endhour: '11:30',
                    eventtype: 'ion-mic-c',
                    room: 'MV Office 13',
                    left: (60 + 0 * 120) + 'px',
                    top: (23 + 3.5 * 100) + 'px',
                    height: (1.5 * 100) + 'px',
                    color: 'rgba(0,157,151,0.75)',
                    dateformat: date1.toLocaleDateString()
                });
                tmp.push({
                    eventname: 'Reserved by Ben',
                    starthour: '12:30',
                    endhour: '13:30',
                    eventtype: 'ion-chatbubbles',
                    room: 'MV Office 14',
                    left: (60 + 3 * 120) + 'px',
                    top: (23 + 5.5 * 100) + 'px',
                    height: (1.5 * 100) + 'px',
                    color: 'rgba(18,67,172,0.75)',
                    dateformat: date1.toLocaleDateString()
                });

                //
                //Presentation - 0,157,151 -- ion-mic-c
                //Networking 18,67,172 -- ion-chatbubbles
                //Coffee Break 255,169,0, --ion-coffee
                //Dinner 255,113,0 --ion-wineglass
                return tmp;
            }



        }
    ]);