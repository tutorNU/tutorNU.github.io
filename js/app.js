/*
*
*	APP.JS
*
*
*/
$(document).ready(function(){

  var search_options = Parse.Object.extend("search_options");
  var query = new Parse.Query(search_options);


  /*query.find({
    success: function(results) {
     
    },
    error: function(error){
      alert("Error: ");
    }
  });
*/

  
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
    var price = tutor['attributes']['Rate'];
    var email = tutor['attributes']['email'];
    $('#results > tbody:last').append('<tr><td>'+name+'</td><td>'+subject+'</td><td>'+price+"</td><td><a href='mailto:"+email+"?Subject="+subject+"%20tutoring' target='_blank'>"+
email+"</a></td></tr>");
  }


  function query_parse(suggestion){
    var tutor = Parse.Object.extend("tutor");
    var query = new Parse.Query(tutor);
    query.equalTo("Subject", suggestion.value);
  
    query.find({
      success: function(results){
        //console.log("Successfully retrieved \n"+ JSON.stringify(results,null,2));

        $('#results > tbody:last').html('');
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
        //console.log("All tutors");
        //console.log(results[i]['attributes']['Name']);  
        //console.log(results[i]['attributes']['Subject']);
        //console.log(results[i]['attributes']['email']);

        $('#results > tbody:last').html('');
        for(var i=0;i<results.length;i++) display_tutor(results[i]);      
      }
    });
  }


  $("#homeBtn").click(function(){
    display_all_data();
  });

  display_all_data();

});