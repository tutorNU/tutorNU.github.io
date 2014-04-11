/*
*
*	APP.JS
*
*
*/
$(document).ready(function(){

  FastClick.attach(document.body);

  var optionsDB = Parse.Object.extend("search_options");
  var optionsQuery = new Parse.Query(optionsDB);

  var tutorDB = Parse.Object.extend("tutor");
  var tutorQuery = new Parse.Query(tutorDB);

  optionsQuery.find({
    success: function(results){
      var suggestion = [];
      for(var i=0;i<results.length;i++) suggestion.push(results[i]['attributes']['subject']);
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
    //<a href='mailto:tutor@gmail.com?Subject="+subject+"%20tutoring&body=Hello "+firstname+",%0D%0A%0D%0AI found your information on tutorNU and I am interested in learning more about "+subject+".  Would it be possible for us to meet and talk specifics?' target='_blank'><span class='glyphicon glyphicon-envelope pull-right'></span></a>
    var firstname = name.split(' ')[0];


    var next = $("#localinnerdatadiv");
    next.html(firstname+"<br>"+subject+"<br>"+price+"<br>");

    $('#datadiv').append("<div class='row'><div class='col-sm-2'><div class='row '><div class='media-img  pull-left  col-sm-5  col-md-4 '><img src='./icons/artwork-source.png' alt='About'  width='50' height='50' /></div><div class='media-body   col-sm-7 col-md-8  '><h4 class='media-heading'>"+name+"</h4><p class='hidden-sm'>Subject: "+subject+"</p><p class='hidden-sm'>Hourly rate: $"+price+"</p></div></div></div></div><hr>");
    // $('#datadiv').append("<div>"+firstname+"<br>"+subject+"<br>"+price+"<hr></div>");

    //$('#results > tbody:last').append("<tr ><td>"+firstname+"</td><td>"+subject+"</td><td>"+price+"</td></tr>");

  }


  function query_parse(suggestion)
  {
    var query = new Parse.Query(tutorDB);
    query.equalTo("Subject", suggestion.value);
  
    query.find({
      success: function(results){
        //console.log("Successfully retrieved \n"+ JSON.stringify(results,null,2));


        $('#results > tbody:last').html('');
        $('#datadiv').html('<hr>');
        for(var i=0;i<results.length;i++) 
        {
          display_tutor(results[i]);
        }
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

  $('#autocomplete').keyup(function(){
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

  function private_browsing()
  {
    var storageTestKey = 'sTest',
    storage = window.sessionStorage;

    try {
      storage.setItem(storageTestKey, 'test');
      storage.removeItem(storageTestKey);
    } 
    catch (e) {
      if (e.code == DOMException.QUOTA_EXCEEDED_ERR && storage.length == 0) {
        // private mode
        alert("Please disable private browsing!");
      } 
      else {
        throw e;
      }
    }
  }

  private_browsing();

  $("#results").stupidtable();
  //highlight to show which column is being sorted 
  $("#results th").click(function(){
    $(this).siblings().removeClass("bg-success");
    $(this).addClass("bg-success");
  });

  
/*
 * Fix for footer when the keyboard is displayed
 */
$(document).on('focus', 'input, textarea', function() 
{
  $.mobile.activePage.find("div[data-role='footer']").hide();
});

$(document).on('blur', 'input, textarea', function() 
{
  $.mobile.activePage.find("div[data-role='footer']").show();
});



  

 
});