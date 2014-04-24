$(document).ready(function(){
	$('#header .container').html('');


	/*$(document).on("click", ".back", function(){
   	window.history.go(-1);
  	});*/


	var tutorDB = Parse.Object.extend("tutor");
   var query = new Parse.Query(tutorDB);

	var url = location.href;

	var searchname = url.substring(url.indexOf('#')+1,url.length);

   query.equalTo("Name", searchname);

   query.find({
   	success: function(results){
   		//fill in default person for development
   		var name = "John Smith"; 
    		var major = "Finance";
   		var subjects = ["Econometrics"];
   		var email = "johnsmith@gmail.com";
   		var year = "Senior";
   		var rating= [{grade:4.3,review:"John is a decent tutor, but he goes too fast sometimes.", who:"Tim"}];

   		if(results[0]){
   			name = results[0]['attributes']['Name'];
   			major = results[0]['attributes']['major'];
   			subjects = [results[0]['attributes']['Subject']];
   			email= results[0]['attributes']['email'];
   			year = results[0]['attributes']['Year'];
   			rating = results[0]['attributes']['Rating']; 
        classes= results[0]['attributes']['Classes'];
        availability = results[0]['attributes']['Availability'];
        experience = results[0]['attributes']['Experience']; 
   		}

   		//<span class='glyphicon glyphicon-chevron-left'></span> <--back button
			$('#header .container').html("<center><h3>"+name+"</h3></center>");

			$('#aboutname').html(name.split(' ')[0]);
			$('#major').html(major);
			$('#year').html(year);
			$('#email').html("<a href='mailto:tutor@gmail.com?Subject=Tutoring&body=Hello "+name.split(' ')[0]+",%0D%0A%0D%0AI found your information on tutorNU and I am interested in learning more about _____.  Would it be possible for us to meet and talk specifics?' target='_blank'>Send "+name.split(' ')[0]+" an email!</span></a>");
			for(var i=0;i<subjects.length;i++) $('#skills .panel-body ul').append("<li>"+subjects[i]+"</li>");
			if(rating)
      {
        for(var i=0;i<rating.length;i++){$('#reviews .panel-body').append("<p><b>("+rating[i]['grade']+")</b>  "+rating[i]['review']+"<br/>  - "+rating[i]['who']+"<br/><br/>");}
      }
      else $('#reviews .panel-body').html("<b>No reviews yet.</b>");
      $('#classes .panel-body').html(classes);
      $('#availability .panel-body').html(availability);
      $('#experience .panel-body').html(experience);
  		},

		error: function(err){
      	$('#header .container').html("<center><h3>Error</h3></center>");
    	}

   });

});