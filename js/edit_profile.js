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
        password = results['attributes']['pwd'];
        
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
        $('#pwd').val(password);
	  },
	  error: function(error) {
	    console.log("wrong password");
	  }
	});


	
	$("#update").click(function(){
		
		var Name = $('#_NAME_').val();
		var rate = $('#rate').val();
		var email = $('#EMAIL').val();
		var password = $('#pwd').val();
		var subject = $('#SUBJECT').val();
		var major = $('#MAJOR').val();
		var year = $('#YEAR').val();
		var availability = $('#AVAIL').val();
		var experience = $('#EXP').val();
		var Class = $('#class').val();
	  var questions = $('#Ques').val();


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



		var tutor = Parse.Object.extend("tutor");
  		var query = new Parse.Query(tutor);
       
		var url = location.href;

		var id = url.substring(url.indexOf('#')+1,url.length);

		query.get(id,{
   			success: function(tutor){
				
   		   		tutor.save(null, {

   		   			success: function(tutor){

   		   				tutor.set('Rate',Number(rate));
   		   				tutor.set('email',email);
   		   				tutor.set('pwd',password);
   		   				tutor.set('Year',year);
   		   				tutor.set('Availability',availability);
   		   				tutor.set('Question',questions);
   		   				tutor.set('Experience',experience);
   		   				tutor.set('major',major);
   		   				tutor.set('Name',Name);
   		   				tutor.set('Classes',Class);
   		   				tutor.set('Subject',subject);
   		   				tutor.save();
   		   				alert("Successfully updated listing.")
   		   				//location.href='./tutor_profile.html#'+Name;
   		   			},
   		   			error: function(error){
   		   				console.log("Could not save object.");
   		   			}
   		   		})

   		   	}
   		});
   		   	   
  	});

  			 
 
  			
  			
			
		
	

 


   $.fn.log = function() {
  console.log.apply(console, this);
  return this;
};


   
	
});