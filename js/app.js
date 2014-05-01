/*
*
*	APP.JS
*
*
*/
$(document).ready(function(){

  FastClick.attach(document.body);

  var tutorDB = Parse.Object.extend("tutor");
  var tutorQuery = new Parse.Query(tutorDB);
  

  function display_tutor(tutor)
  {
    r = /(?=\S)[^,]+?(?=\s*(,|$))/g;
    var name = tutor['attributes']['Name'];
    var subject = tutor['attributes']['Subject'];
    var subjarr = subject.match(r);
    var price = tutor['attributes']['Rate'];
    var email = tutor['attributes']['email'];
    var major =  tutor['attributes']['major'];

    //console.log(name);
    image = "./icons/images/"+name+".png";



    $('#tutor-list').append("<div class='tutor-link'>"+
        "<div class='row'>"+
          "<div class='col-sm-2'>"+
            "<div class='row'>"+

              "<div class='media-img pull-left  col-sm-5  col-md-3'>"+
                "<img src='"+image+"' alt='./placeholder.png' height='55'width='55'/>"+

              "</div>"+
              "<div class='media-body col-sm-7 col-md-8  '>"+
                "<h4 class='media-heading'>"+name+"</h4>"+
                "<p class='hidden-sm'>Major: "+major+
                "<br/>Subject: "+subjarr[0]+
                "<span class='pricebox pull-right'>$"+price+"/hr</span></p>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"+
      "</div>"
      );  

  }


  function query_parse(suggestion)
  {
    var query = new Parse.Query(tutorDB);
    query.equalTo("Subject", suggestion.value);
  
    query.find({
      success: function(results){

        $('#tutor-list').html('');
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
    query.descending("createdAt");

    query.find({
      success: function(results) {
        for(var i=0;i<results.length;i++) display_tutor(results[i]);      
      }
    });

  }

  $('#autocomplete').keyup(function(){
    var searchText = $("#autocomplete").val();
    if(searchText !=" "){
      $("#tutor-list .media-body").each(function(){
        if ($(this).text().search(new RegExp(searchText, "i")) < 0) 
          {
            $(this).parent().parent().parent().parent().hide();
          } 
        else{
          $(this).parent().parent().parent().parent().show();
        }
      });
    }
  });
  
  display_all_data();


  //fix the header floating bugs
// iOS check...ugly but necessary

  //so it will notice dynamically added elements also
  $(document).on("click", ".tutor-link", function(){
    var name = $(this).find('h4').text();
    location.href="./tutor_profile.html#"+name;
  });

  $(document).on("click", "#homenav", function(){
    location.href= "./index.html";
  });

  $(document).on("click", "#createprof", function(){
    location.href= "./create_profile.html";
  });
  


});