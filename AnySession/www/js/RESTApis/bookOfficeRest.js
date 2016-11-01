angular.module("RESTServices")
 .service('bookOfficeRest', ['SSFConfigConstants', '$http', "$q",
  function(SSFConfigConstants, $http, $q) {

 var bookOffice = this;
 var URL= "https://anysession-oscar521.c9users.io/api/sessions";
 
   bookOffice.post = function(office){
        return $http ({
            url: URL,
            method: 'POST',
            data:office
        });
    };
     
     
      bookOffice.get = function(){
        return $http ({
            url: URL,
            method: 'GET'
        });
    };
                  
             




  }
 ]);