$(document).ready(function(){
	$('#header .container').html('');
	$('#back').click(function(){
		window.history.back();
	});


	var tutorDB = Parse.Object.extend("tutor");
   var query = new Parse.Query(tutorDB);

   query.equalTo("Subject", "Java");

   query.find({
   	success: function(results){
   		var name = results[0]['attributes']['Name'];
   		var major = results[0]['attributes']['major'];
   		var subject = results[0]['attributes']['Subject'];
   		var email = results[0]['attributes']['email'];
   		var year = results[0]['attributes']['Year'];
			$('#header .container').html("<center><h2>"+name+"</h2></center>");
			//<span id='back' class='glyphicon glyphicon-chevron-left'></span>

			$('#aboutbar').html(name.split(' ')[0]);
			$('#major').html(major);
			$('#year').html(year);
			$('#email').html("<a href='mailto:tutor@gmail.com?Subject=Tutoring&body=Hello "+name.split(' ')[0]+",%0D%0A%0D%0AI found your information on tutorNU and I am interested in learning more about _____.  Would it be possible for us to meet and talk specifics?' target='_blank'>"+email+"</span></a>");

			$('#profileTabs a').click(function(e){
  				e.preventDefault();
  				$(this).tab('show');
			});
		},

		error: function(err){
      	$('#header .container').html("<center><h2>Error</h2></center>");
    	}

   });












});