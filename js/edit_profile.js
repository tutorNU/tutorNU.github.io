$(document).ready(function(){
	$('#header .container').html(' ');
	$('#header .container').html("<center><h3>Edit Listing</h3></center>");

	$("#submit").click(function(){
		

		if($('#password').val() ==""){
			alert("please enter a password");
			return ;

	}
	else{
    
		

		var Name = $('#NAME').val();
		var rate = $('#rate').val();
		var email = $('#EMAIL').val();
		var password = $('#password').val();
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
		}
	})
   $("#filler").click(function(){
   	document.getElementById("NAME").value = name_;
   	document.getElementById("rate").value =rating_;
	document.getElementById("EMAIL").value = email_;
	document.getElementById("SUBJECT").value = subjects_;
	document.getElementById("MAJOR").value = major_;
	document.getElementById("YEAR").value = year_;
	document.getElementById("AVAIL").value = availability_;
	document.getElementById("EXP").value =experience_;
	document.getElementById("class").value = classes_;
   })

   $.fn.log = function() {
  console.log.apply(console, this);
  return this;
};


   
	
});