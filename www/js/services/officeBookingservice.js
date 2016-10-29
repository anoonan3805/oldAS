angular.module('officeBookingservice', [])
    .service('officeBookingservice', ['$window', function($window) {
        
    //Takes request object and places it in add/edit area.
        var service = this;
        
        
        var bookingInfo ={};
    

        
        service.getbookingInfo = function() {
            
            
            return bookingInfo;
              
            
        };
        
        service.getRoom = function() {
            return bookingInfo.officeName;
        };
        
        service.getDate = function() {
            return bookingInfo.reservedfromDate;
        };
        
        service.getTime = function(){
            return bookingInfo.hour;
        };
        
        service.setbookingInfo = function(officeBooking) {
            
            
            // var newobject = JSON.parse(JSON.stringify(request));
            
            bookingInfo = officeBooking;

        };

  
    }]);
