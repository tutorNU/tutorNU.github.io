$(document).ready(function(){
	$('#header .container').html(' ');
	$('#header .container').html("<center><h3>Edit Listing</h3></center>");
    
  
	  var Tutor = Parse.Object.extend("tutor");
	  var query = new Parse.Query(Tutor);
	  console.log(password);
	  console.log(Email);
	  query.equalTo("email", Email);
	  query.equalTo("pwd", password);
	  
	    // var query1 = new Parse.Query(tutor);

	   query.find({
	  success: function(results) {
	       if(results[0]['attributes']['email']== Email &&
	        results[0]['attributes']['pwd'] == password){
	        name_ = results[0]['attributes']['Name'];
	        major_ = results[0]['attributes']['major'];
	        subjects_ = [results[0]['attributes']['Subject']];
	        email_= results[0]['attributes']['email'];
	        year_ = results[0]['attributes']['Year'];
	        rating_ = results[0]['attributes']['Rating'];
	        questions_ = results[0]['attributes']['Question']; 
	        classes_= results[0]['attributes']['Classes'];
	        availability_ = results[0]['attributes']['Availability'];
	        experience_= results[0]['attributes']['Experience']; 
	        password_ = results[0]['attributes']['pwd'];

	        console.log(name_);
	        console.log(major_);
	        console.log(subjects_);
	        console.log(password_);
	        document.getElementById("_NAME_").value =name_;
	        $('#MAJOR').val()=major_;
	        $('#SUBJECT').val()=subjects_;
	        $('#EMAIL').val()=email_;
	        $('#YEAR').val()=year_;
	        $('#rate').val()=rating_;
	        $('#Ques').val()=questions_;
	        $('#class').val()=classes_;
	        $('#AVAIL').val()=availability_;
	        $('#EXP').val()=experience_;
	        $('#password').val()=password_;
	      }
	  },
	  error: function(error) {
	    console.log("wrong password");
	  }
	});


          

  
 
        


    
	
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

 


   $.fn.log = function() {
  console.log.apply(console, this);
  return this;
};


   
	
});