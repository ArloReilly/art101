/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/
 var butt1 = $("#challenges").append("<button> Press Me! </button>");
 //add click Toggle
 $(butt1).click(function(){
   $("#p1").toggleClass("selected");
 });
 //add a button bellow the problem div
 var butt2 = $("#problems").append("<button> Heres Another Butt! </button>");
 $(butt2).click(function(){
   $("#p2").toggleClass("selected2");
 });
 //add a button bellow the results div
 var butt3 = $("#problems").append("<button> One More Time! </button>");
 $(butt3).click(function(){
   $("#p3").toggleClass("selected3");
 });
