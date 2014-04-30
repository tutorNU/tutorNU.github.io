$(document).ready(function(){
	$('#header .container').html(' ');
	$('#header .container').html("<center><h3>Edit Listing</h3></center>");
    
  
	  var tutorDB = Parse.Object.extend("tutor");
  var query = new Parse.Query(tutorDB);

	var url = location.href;

	var id = url.substring(url.indexOf('#')+1,url.length);

   
   query.get(id,{
   	success: function(results){
   	
   		name = results['attributes']['Name'];
   		major = results['attributes']['major'];
   		subjects = results['attributes']['Subject'];
   		email= results['attributes']['email'];
   		year = results['attributes']['Year'];
   		price = results['attributes']['Rate'];
        questions = results['attributes']['Question']; 
        classes= results['attributes']['Classes'];
        availability = results['attributes']['Availability'];
        experience = results['attributes']['Experience']; 
        password = results['attributes']['password'];
        
        $("#_NAME_").val(name) ;
        $('#MAJOR').val(major);
        $('#SUBJECT').val(subjects);
        $('#EMAIL').val(email);
        $('#YEAR').val(year);
        $('#rate').val(price);
        $('#Ques').val(questions);
        $('#class').val(classes);
        $('#AVAIL').val(availability);
        $('#EXP').val(experience);
        $('#password').val(password);
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