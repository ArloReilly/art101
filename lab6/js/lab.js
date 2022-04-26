/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/

 // Define Variables
 myTransport = ["Rav4", "Tricycle", "Skateboard", "Legs"];

 myRide = {
   make: "Toyota",
    model: "Rav4",
    color: "Silver",
    year: 2020,
    age: function() {
        return 2022 - age;
    }
 }

 // output
 document.writeln("Kinds of of Transport I use:", myTransport, "</br>");
 document.writeln("My Ride er Die: <pre>",
    JSON.stringify(myRide, null, '/t'), "</pre>");
