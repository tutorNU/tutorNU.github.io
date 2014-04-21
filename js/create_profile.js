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
   	document.getElementById("NAME").value = "Justin Reay";
   	document.getElementById("rate").value =15;
	document.getElementById("EMAIL").value = "JustinReay2011@u.northwestern.edu";
	document.getElementById("SUBJECT").value = "Game Design"
	document.getElementById("MAJOR").value = "Computer Science"
	document.getElementById("YEAR").value = "Junior"
	document.getElementById("AVAIL").value = "Free on Monday from 2:00pm to 5:00pm, Tuesday from 12:00pm to 2:00pm, Friday 10:00am to 12:00pm";
	document.getElementById("EXP").value ="TA for Professor Horswill, did some math tutoring in high school.";
	document.getElementById("Ques").value = "What previous experience do you have? What is your goal for learning this skill?";
   })
	
});