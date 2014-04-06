/*
*
*	APP.JS
*
*
*/

//get dropdown category for search 
$("#search_cat").click(function(){
	var category = $("#search_cat").val();
});


$("#search").click(function(){

var query = new Parse.Query("tutor");
query.equalTo("Subject", "Algorithms");
query.find({
  success: function(results) {
    // results is an array of Parse.Object.
    console.log("success");
    console.log(results[0]['attributes']['Name']);
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
	});
});


$(function(){
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
   //   var thehtml = '<strong>you have looked up</strong> ' + suggestion.value;
   //   $('#outputcontent').html(thehtml);
    }
  });
  
});

$("#homeBtn").click(function(){
    var tutor = Parse.Object.extend("tutor");
  var query = new Parse.Query(tutor);
  //query.exists("Subject");

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
        $('#allDataContent').append(result + "<br>" + result2 + "<br>" + result1 + "<br>");
      }
      
    }
  });
}); 

function query_parse(suggestion){
  var tutor = Parse.Object.extend("tutor");
  var query = new Parse.Query(tutor);
  query.equalTo("Subject", suggestion.value);
  
  query.find({
  success: function(results) {
    console.log("Successfully retrieved ");
    console.log(results[0]['attributes']['Name']);
    console.log(results[0]['attributes']['Subject']);
    console.log(results[0]['attributes']['email']);

     var result = 'Tutor ' +results[0]['attributes']['Name'] +' is available';
     var result1= ' His email is: ' + results[0]['attributes']['email'];
     $('#outputcontent').html(result+"<br>"+result1);
  },
  error: function(error) {
    alert("Error: ");
  }
});

}

function display_all_data(){

}

