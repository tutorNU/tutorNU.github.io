
  
  var Email = "";
  var password = "";


$(document).ready(function(){
  $('#header .container').html('');

  /*$(document).on("click", ".back", function(){
    window.history.go(-1);
    });*/
       

  var tutorDB = Parse.Object.extend("tutor");
  var query = new Parse.Query(tutorDB);

  var url = location.href;

  var searchname = url.substring(url.indexOf('#')+1,url.length);

   query.equalTo("Name", searchname);

   query.find({
    success: function(results){
      //fill in default person for development
      var name = "John Smith"; 
      var major = "Finance";
      var subjects = ["Econometrics"];
      var email = "johnsmith@gmail.com";
      var classes = "EECS 110";
      var year = "Senior";
      var rating= [{grade:4.3,review:"John is a decent tutor, but he goes too fast sometimes.", who:"Tim"}];
      var questions = "";
      var password ="johnsmith";

      if(results[0]){
        name = results[0]['attributes']['Name'];
        major = results[0]['attributes']['major'];
        subjects = [results[0]['attributes']['Subject']];
        email= results[0]['attributes']['email'];
        year = results[0]['attributes']['Year'];
        rating = results[0]['attributes']['Rating'];
        questions = results[0]['attributes']['Question']; 
        classes= results[0]['attributes']['Classes'];
        availability = results[0]['attributes']['Availability'];
        experience = results[0]['attributes']['Experience']; 
        password = results[0]['attributes']['password'];
        Email = email;
      }
      
      //<span class='glyphicon glyphicon-chevron-left'></span> <--back button
      $('#header .container').html("<center><h3>"+name+"</h3></center>");
      document.getElementById("profpic").src = "./icons/images/" + name + ".png";
      $('#aboutname').html(name.split(' ')[0]);
      $('#major').html(major);
      $('#year').html(year);
      if(!questions) questions = "No questions.";
      $('#email').html("<a href='mailto:tutor@gmail.com?Subject=Tutoring&body=Dear Student,%0D%0A%0D%0AThank you for your interest in my tutoring services. Please answer the questions below to help me better understand what you are looking for."+
        "%0D%0A%0D%0A"+  questions  +"%0D%0A%0D%0A-"+name.split(' ')[0]+"%0D%0A%0D%0A===========================================================' target='_blank'>Send "+
          name.split(' ')[0]+
          " an email!</span></a>");

      if(subjects) for(var i=0;i<subjects.length;i++) $('#skills .panel-body ul').append("<li>"+subjects[i]+"</li>");
      else $('#skills .panel-body').html("No subjects listed.");

      if(rating) for(var i=0;i<rating.length;i++){$('#reviews .panel-body').append("<p><b>("+rating[i]['grade']+")</b>  "+rating[i]['review']+"<br/>  - "+rating[i]['who']+"<br/><br/>");}
      else $('#reviews .panel-body').html("<b>No reviews yet.</b>");

      if(classes) $('#class .panel-body').html(classes);
      else $('#class .panel-body').html("<b>No classes listed.</b>");

      // if(availability) $('#availability .panel-body').html(availability); 
      // else $('#availability .panel-body').html("<b>No availability given.</b>");

      // if(experience) $('#experience .panel-body').html(experience);
      // else $('#experience .panel-body').html("<b>No experience provided.</b>");
      },

    error: function(err){
        $('#header .container').html("<center><h3>Error</h3></center>");
      }

   });

 
  $('#edit').click(function(){
    var password = prompt("Please enter your password to edit this page.");
  
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
        id_ = results[0].id;
        
        page = "./edit_profile.html#"+id_;
        
        location.href = page;
    
      }
      else alert("Password is incorrect.");
  },
  error: function(error) {
    alert("There was an unexpected error. Please try again.");
  }
});


});


 


  

});

