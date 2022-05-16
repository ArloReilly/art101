/**
 * Author:    Arlo
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/
 $("#butt1").click(function(){
 	$("#boat").toggleClass("boat");
   var name = $("#my-input").val();
   $("h1").html("Hi, " + name);
 })
