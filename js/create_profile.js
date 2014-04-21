$(document).ready(function(){
	$('#header .container').html(' ');
	$('#header .container').html("<center><h3>Create Listing</h3></center>");

	$("#submit").click(function(){
		
		var Name = document.getElementById("NAME").value;
		var rate = document.getElementById("rate").value;
		var email = document.getElementById("EMAIL").value;
		var subject = document.getElementById("SUBJECT").value;
		var major = document.getElementById("MAJOR").value;
		var year = document.getElementById("YEAR").value;
		var availablity= document.getElementById("AVAIL").value;
		var experience = document.getElementById("EXP").value;
		var question = document.getElementById("Ques").value;

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
			Question: question
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
});