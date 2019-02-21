/*The script below uses JQuery and Ajax to load a local JSON file into HTML DOM*/
/*Ajax then iterates through the file record and displays the results*/
/*The JSON file is a record of home prices and zip codes in selected U.S Cities*/
/*This particular script displays only homes found in New York. */
/*Written by Vakindu Philliam*/
 
  $( function() {
 
    $('#getHomes').click( function() {
      var data = {};
      $.ajax( "homes.json", {
        cache: false,
        data: data,
        dataType: "json",
        error: errorHandler,
        success: success
      } );
    } );
 
    function success(feed) {
		
     $.each(feed, function(){
		 
		 if(this.state=="NY") {
		
		 document.write("City: "+this.city+"<p>");
		 document.write("State: "+this.state+"<p>");
		 document.write("Home Price: "+this.price+"<p>");
		 document.write("Zip: "+this.zip+"<p>");
		 document.write("Home ID: "+this.home_id+"<p>");

    		      }
		 });
    
		}
 
    function errorHandler() {
      document.write( "There was a problem retrieving the forecast." );
    }
 
  } );
 