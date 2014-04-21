$(document).ready(function(){
	$('#header .container').html('');

	$('#header .container').html("<center><h3>Create Listing</h3></center>");


	$("#submit").click (function(){
		// alert("saved");
		var Name = document.getElementById("NAME").value;
		var email = document.getElementById("EMAIL").value;
		var subject = document.getElementById("SUBJECT").value;
		var major = document.getElementById("MAJOR").value;
		var year = document.getElementById("YEAR").value;
		var price = $('#price').val();
		var availability= document.getElementById("AVAIL").value;
		var experience = document.getElementById("EXP").value;
		var question = document.getElementById("Ques").value;

		var Tutor = Parse.Object.extend("tutor"); 
		var tutor = new Tutor();

		tutor.save({
			Name: Name,
			email: email,
			Subject: subject,
			Year: year,
			Rate: price,
			major: major,
			Availability : availability,
			Experience : experience,
			Question: question
			}, 
			{
  			success: function(tutor) {
   			console.log("Save succeeded!")
    		// The object was saved successfully.
  			},
  			error: function(tutor, error) {
  				console.log("Save failed.");
    		// The save failed.
    		// error is a Parse.Error with an error code and description.
 	 		}

		})
	});
});