angular.module("RESTServices")
    .service("sessionsREST", ['SSFConfigConstants', '$http', '$q',
        function(SSFConfigConstants, $http, $q) {


            var service = this;

            service.getSession = function() {
                 $http({
                    url: '/session.json',
                    method: "GET"
                });
            };
            //This is how you mock the backend on the front end,
            //you can do it how you are doing it above , but I am not to sure how
            //you might be able to set it up like $http.get({ url: you would have to define the path })
            //i dont think you need the return.. 
            
            //////////////////////////////////////////////////////////
            // the way to call it under any controller is by doing:  
            //  
            // sessionsREST.getSessions().then(function(response){
            //     $scope.data=response;
            //     console.log(response);
            // });
            /////////////////////////////////////////////////////////
            
            
            service.getSessions = function() {
                var defer = $q.defer();
                defer.resolve({
                    status: 200,
                    data: [{
                        "clientID": "56890",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76645"
                    }, {
                        "clientID": "56890",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76456"
                    }, {
                        "clientID": "58458",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76647"
                    }, {
                        "clientID": "58458",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76648"
                    }, {
                        "clientID": "58459",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76649"
                    }, {
                        "clientID": "58459",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76445"
                    }, {
                        "clientID": "57549",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76645"
                    }, {
                        "clientID": "57549",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76345"
                    }, {
                        "clientID": "58543",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76656"
                    }, {
                        "clientID": "58543",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76689"
                    }, {
                        "clientID": "56543",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76634"
                    }, {
                        "clientID": "56543",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76612"
                    }, {
                        "clientID": "54344",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76677"
                    }, {
                        "clientID": "54344",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76673"
                    }, {
                        "clientID": "54321",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76621"
                    }, {
                        "clientID": "54321",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76609"
                    }, {
                        "clientID": "54335",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "76567"
                    }, {
                        "clientID": "54335",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "72345"
                    }, {
                        "clientID": "45665",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "23445"
                    }, {
                        "clientID": "45665",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "23455"
                    }, {
                        "clientID": "87654",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "75432"
                    }, {
                        "clientID": "87654",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "72345"
                    }, {
                        "clientID": "87456",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "75342"
                    }, {
                        "clientID": "87456",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "75346"
                    }, {
                        "clientID": "34589",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "79435"
                    }, {
                        "clientID": "34589",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "74394"
                    }, {
                        "clientID": "34546",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "72354"
                    }, {
                        "clientID": "34546",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "70043"
                    }, {
                        "clientID": "46950",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "95645"
                    }, {
                        "clientID": "46950",
                        "todos": ["Bad Dreams", "Work Problems"],
                        "date": "12-31-2016",
                        "pychID": "1234",
                        "id": "95456"
                    }],
                    config: {},
                    headers: function() {},
                    statusText: "OK"
                });
                return defer.promise;
            };











        }
    ]);