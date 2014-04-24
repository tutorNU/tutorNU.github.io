$(document).ready(function(){
	$('#header .container').html(' ');
	$('#header .container').html("<center><h3>Create Listing</h3></center>");

	$("#submit").click(function(){
		

		var Name = $('#NAME').val();
		var rate = $('#rate').val();
		var email = $('#EMAIL').val();
		var subject = $('#SUBJECT').val();
		var major = $('#MAJOR').val();
		var year = $('#YEAR').val();
		var availablity = $('#AVAIL').val();
		var experience = $('#EXP').val();
		var Class = $('#class').val();
	  
		var rating = [{"grade":"","review":"","who":""}];


		var Tutor = Parse.Object.extend("tutor"); 
		var tutor = new Tutor();

		tutor.save({
			Name: Name,
			Rate: parseInt(rate),
			email: email,
			Subject: subject,
			Year: year,
			major: major,
			Availability : availablity,
			Experience : experience,
			Classes: Class
			}, 
			{
  			success: function(tutor) {
  				location.href='https://tutorNU.github.io/index.html';
    			// The object was saved successfully.
  			},
  			error: function(tutor, error) {
    			// The save failed.
    			// error is a Parse.Error with an error code and description.
 	 		}
		})
	})
   $("#filler").click(function(){
   	document.getElementById("NAME").value = "Justin Reay";
   	document.getElementById("rate").value =15;
	document.getElementById("EMAIL").value = "JustinReay2011@u.northwestern.edu";
	document.getElementById("SUBJECT").value = "Game Design"
	document.getElementById("MAJOR").value = "Computer Science"
	document.getElementById("YEAR").value = "Junior"
	document.getElementById("AVAIL").value = "Free on Monday from 2:00pm to 5:00pm, Tuesday from 12:00pm to 2:00pm, Friday 10:00am to 12:00pm";
	document.getElementById("EXP").value ="TA for Professor Horswill, did some math tutoring in high school.";
	document.getElementById("class").value = "EECS 394";
   })
	
});