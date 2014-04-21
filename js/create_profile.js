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
   $("#filler").click(function(){
   	document.getElementById("NAME").value = "John Smith";
   	document.getElementById("rate").value =15;
	document.getElementById("EMAIL").value = "JohnSmith2000@gmail.com";
	document.getElementById("SUBJECT").value = "Software Management"
	document.getElementById("MAJOR").value = "Computer Science"
	document.getElementById("YEAR").value = "2010"
	document.getElementById("AVAIL").value = "free on Monday from 2:00pm to 5:00pm, Tuesday from 12:00pm to 2:00pm, Friday 10:00am to 12:00pm";
	document.getElementById("EXP").value ="highly experience in software management";
	document.getElementById("Ques").value = "do you have any HTML5, CSS, Javascript skills and experience in working in teams?";
   })
	
});