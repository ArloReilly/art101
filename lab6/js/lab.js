/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/

 // Define Variables
 myTransport = ["Toyota Prius", "Bike", "Skateboard", "RidesfromFriends", "SlipnSlide"];

 myRide = {
   make: "Toyota",
    model: "Prius",
    color: "Red",
    year: 2017,
    age: function() {
        return 2022 - age;
    }
 }

 // output
 document.writeln("Kinds of of Transport I use:", myTransport, "</br>");
 document.writeln("MyMainRide: <pre>",
    JSON.stringify(myRide, null, '\t'), "</pre>");
