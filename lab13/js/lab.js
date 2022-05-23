/**
 * Author:    Arlo with refrences from Wes Modes
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/
 for (i=1; i <= 100; i++) {
    if (i%15 == 0) {
        console.log("FizzBuzz");
    } else if (i%3 == 0) {
        console.log("Fizz");
    } else if (i%5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
