$(document).ready(function(){
	$('#header .container').html(' ');
	$('#header .container').html("<center><h3>Create Listing</h3></center>");

	$("#submit").click(function(){
		
		var Name = $('#NAME').val();
		var password = $('#password').val();
		var rate = $('#rate').val();
		var email = $('#EMAIL').val();
		var subject = $('#SUBJECT').val();
		var major = $('#MAJOR').val();
		var year = $('#YEAR').val();
		var availablity = $('#AVAIL').val();
		var experience = $('#EXP').val();
		var Class = $('#class').val();
	  	var questions = $('#Ques').val();
		var rating = [{"grade":"","review":"","who":""}];


		//validation
		if(Name==""){
			alert("Please enter your name.");
			return;
		}
		else if(password==""){
			alert("Please enter a password.");
			return;
		} 	
		else if(email==""){
			alert("Please enter a valid email address.");
			return;
		}
		else if(subject==""){
			alert("Please enter at least one subject.");
			return;
		}	
		else if(rate==""){
			alert("Please enter a desired hourly rate.")
		}	 



		var Tutor = Parse.Object.extend("tutor"); 
		var tutor = new Tutor();

		tutor.save({
			Name: Name,
			Rate: parseInt(rate),
			pwd : password,
			email: email,
			Subject: subject,
			Year: year,
			major: major,
			Question: questions,
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
   	$("#NAME").val("Justin Reay");
   	$("#password").val("1234");
   	$("#rate").val(15);
		$("#EMAIL").val("JustinReay2011@u.northwestern.edu");
		$("#SUBJECT").val("Game Design");
		$("#MAJOR").val("Computer Science");
		$("#YEAR").val("Junior");
		$("#AVAIL").val("Free on Monday from 2:00pm to 5:00pm, Tuesday from 12:00pm to 2:00pm, Friday 10:00am to 12:00pm");
		$("#EXP").val("TA for Professor Horswill, did some math tutoring in high school.");
		$('#Ques').val("What previous experience do you have? What is your ultimate goal for learning this skill?");
		$("#class").val("EECS 394");
   })

   $.fn.log = function() {
  		console.log.apply(console, this);
  		return this;
	};

});