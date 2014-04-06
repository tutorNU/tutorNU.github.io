/*
*
*	APP.JS
*
*
*/
$(document).ready(function(){

var suggestion =[	
	  { value: 'Game Design', data: 'GD' },
    { value: 'Data Structures', data: 'DS' },
    { value: 'C++', data: 'C++' },
    { value: 'Image Processing', data: 'IP' },
    { value: 'Algorithms', data: 'AL' },
	];

  
$('#autocomplete').autocomplete({
    lookup: suggestion,
    onSelect: function (suggestion) {
      query_parse(suggestion);
    }
});
  
function display_tutor(tutor)
{
   var name = tutor['attributes']['Name'];
   var subject = tutor['attributes']['Subject'];
   var price = '$0.00';
   var email = tutor['attributes']['email'];
   $('#results > tbody:last').append('<tr><td>'+name+'</td><td>'+subject+'</td><td>'+price+'</td><td>'+email+'</td></tr>');
}



function query_parse(suggestion){
  var tutor = Parse.Object.extend("tutor");
  var query = new Parse.Query(tutor);
//query.equalTo("Subject", suggestion.value);
  
  query.find({
    success: function(results) {
      console.log("Successfully retrieved \n"+ JSON.stringify(results,null,2));

      for(var i=0;i<results.length;i++) display_tutor(results[i]);

    },
    error: function(error){
      alert("Error: ");
    }
  });
}


function display_all_data()
{

  var tutor = Parse.Object.extend("tutor");
  var query = new Parse.Query(tutor);

  query.find({
    success: function(results) {
      console.log("All tutors");
      for (i = 0; i < results.length; i++) {
        console.log(results[i]['attributes']['Name']);  
        console.log(results[i]['attributes']['Subject']);
        console.log(results[i]['attributes']['email']);

        var result  = 'Tutor: ' + results[i]['attributes']['Name'];
        var result2 = 'Subject: ' + results[i]['attributes']['Subject'];
        var result1 = 'Email: ' + results[i]['attributes']['email'];
        for(var i=0;i<results.length;i++) display_tutor(results[i]);
      }
      
    }
  });
}



$("#homeBtn").click(function(){
  display_all_data();
});

});