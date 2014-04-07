/*
*
*	APP.JS
*
*
*/
$(document).ready(function(){

  var optionsDB = Parse.Object.extend("search_options");
  var optionsQuery = new Parse.Query(optionsDB);

  var tutorDB = Parse.Object.extend("tutor");
  var tutorQuery = new Parse.Query(tutorDB);

  optionsQuery.find({
    success: function(results){
      var suggestion = [];
      for(var i=0;i<results.length;i++) suggestion.push(results[i]['attributes']['subject']);

      $('#autocomplete').autocomplete({
        lookup: suggestion,
        Select: function (suggestion){
          query_parse(suggestion);
        }
      });
    },

    error: function(err){
      console.log("failed query");
    }

  });
  

  function display_tutor(tutor)
  {
    var name = tutor['attributes']['Name'];
    var subject = tutor['attributes']['Subject'];
    var price = tutor['attributes']['Rate'];
    var email = tutor['attributes']['email'];
    $('#results > tbody:last').append("<tr><td>"+name+"&nbsp;&nbsp;<a href='mailto:"+email+"?Subject="+subject+"%20tutoring' target='_blank'><span class='glyphicon glyphicon-envelope'></span></a></td><td>"+subject+"</td><td>"+price+"</td></tr>");

  }


  function query_parse(suggestion)
  {
    var query = new Parse.Query(tutorDB);
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
    var query = new Parse.Query(tutorDB);

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

  $('#autocomplete').keyup(
            function(){
                var searchText = $("#autocomplete").val();
               if(searchText !=" "){
               $("table tbody tr").each(function(){
                if ($(this).text().search(new RegExp(searchText, "i")) < 0) $(this).fadeOut();
            
                else{
                  $(this).show();
                    }
                  });
             }
            });
  
display_all_data();


});