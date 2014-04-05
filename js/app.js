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
    console.log(results[0]['attributes']['Name']);
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});



});
