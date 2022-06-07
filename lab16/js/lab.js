/**
 * Author:    Arlo with refrences from Wes Modes
 * Created:   11.05.2009
 *
 * License:   Public Domain
 **/
 var number = Math.floor(Math.random()*2000)
 var stratUrl = "https://xkcd.com/"
 var endurl = "/info.0.json"

 function getAndPutData(open, num, close){
   $.ajax({
     url: startUrl + num + endUrl,
     type: "GET",
     dataType: "json",
     success: function(data){
       var comicObj = data;
       console.log(comicObj);
       var titleEl = $("#comicName").html(comicObj.title);
       console.log(titleEl);
       console.log(comicObj.title);

       var imgEl = $("<img>").attr("src", comicObj.img);
       console.log(imgEl);
       var altEl = comicObj.alt;
       imgEl.attr("title", altEl);
       $("#output").html(imgEl);

       console.log(comicObj);
     },
     error: function(jqXHR, textStatus, errorThrown) {
       console.log("Error: ", textStatus,errorThrown);
     }
   })

 }
