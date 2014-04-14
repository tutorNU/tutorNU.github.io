$(document).ready(function(){
	$('#header .container').html('');
	$('#back').click(function(){
		window.history.back();
	});


	var tutorDB = Parse.Object.extend("tutor");
   var query = new Parse.Query(tutorDB);


	//console.log(location.href);
	var url = location.href;
	//console.log(url);
	var searchname = url.substring(url.indexOf('#')+1,url.length);
	//console.log(searchname);

   query.equalTo("Name", searchname);

   query.find({
   	success: function(results){
   		var name = results[0]['attributes']['Name'];
   		var major = results[0]['attributes']['major'];
   		var subject = results[0]['attributes']['Subject'];
   		var email = results[0]['attributes']['email'];
   		var year = results[0]['attributes']['Year'];
   		var rating = results[0]['attributes']['Rating']; 
   		console.log(rating);
			$('#header .container').html("<center><h3>"+name+"</h3></center>");

			$('#aboutbar').html(name.split(' ')[0]);
			$('#major').html(major);
			$('#year').html(year);
			$('#email').html("<a href='mailto:tutor@gmail.com?Subject=Tutoring&body=Hello "+name.split(' ')[0]+",%0D%0A%0D%0AI found your information on tutorNU and I am interested in learning more about _____.  Would it be possible for us to meet and talk specifics?' target='_blank'>Send "+name.split(' ')[0]+" an email!</span></a>");
			for(var i=0;i<rating.length;i++){$('#reviews').append("<p><b>("+rating[i]['grade']+")</b>  "+rating[i]['review']+"<br/>  - "+rating[i]['who']+"<br/><br/>");}


			$('#profileTabs a').click(function(e){
  				e.preventDefault();
  				$(this).tab('show');
			});
		},

		error: function(err){
      	$('#header .container').html("<center><h3>Error</h3></center>");
    	}

   });












});