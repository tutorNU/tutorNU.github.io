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

  /*optionsQuery.find({
    success: function(results){
      var suggestion = [];
      for(var i=0;i<results.length;i++) suggestion.push(results[i]['attributes']['subject']);
    
    },
    error: function(err){
      console.log("failed query");
    }

  });*/
  

  function display_tutor(tutor)
  {
    var name = tutor['attributes']['Name'];
    var subject = tutor['attributes']['Subject'];
    var price = tutor['attributes']['Rate'];
    var email = tutor['attributes']['email'];

    $('#tutor-list').append("<div class='tutor-link'>"+
        "<div class='row'>"+
          "<div class='col-sm-2'>"+
            "<div class='row'>"+
              "<div class='media-img  pull-left  col-sm-5  col-md-3'>"+
                "<img src='./icons/artwork-source.png' alt='About'  width='50' height='50' />"+
              "</div>"+
              "<div class='media-body  col-sm-7 col-md-8  '>"+
                "<h4 class='media-heading'>"+name+"</h4>"+
                "<p class='hidden-sm'>"+subject+"</p>"+
                "<p class='hidden-sm'>Hourly rate: $"+price+"</p>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"+
      "</div>");
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

  //fix the header floating bugs
// iOS check...ugly but necessary
document.body.addEventListener('touchmove', function(e) {
  // This prevents native scrolling from happening.
  e.preventDefault();
}, false);

Scroller = function(element) {
  this.element = this;
  this.startTouchY = 0;
  this.animateTo(0);

  element.addEventListener('touchstart', this, false);
  element.addEventListener('touchmove', this, false);
  element.addEventListener('touchend', this, false);
}

Scroller.prototype.handleEvent = function(e) {
  switch (e.type) {
    case "touchstart":
      this.onTouchStart(e);
      break;
    case "touchmove":
      this.onTouchMove(e);
      break;
    case "touchend":
      this.onTouchEnd(e);
      break;
  }
}

Scroller.prototype.onTouchStart = function(e) {
  // This will be shown in part 4.
  this.stopMomentum();

  this.startTouchY = e.touches[0].clientY;
  this.contentStartOffsetY = this.contentOffsetY;
}

Scroller.prototype.onTouchMove = function(e) {
  if (this.isDragging()) {
    var currentY = e.touches[0].clientY;
    var deltaY = currentY - this.startTouchY;
    var newY = deltaY + this.contentStartOffsetY;
    this.animateTo(newY);
  }
}

Scroller.prototype.onTouchEnd = function(e) {
  if (this.isDragging()) {
    if (this.shouldStartMomentum()) {
      // This will be shown in part 3.
      this.doMomentum();
    } else {
      this.snapToBounds();
    }
  }
}

Scroller.prototype.animateTo = function(offsetY) {
  this.contentOffsetY = offsetY;

  // We use webkit-transforms with translate3d because these animations
  // will be hardware accelerated, and therefore significantly faster
  // than changing the top value.
  this.element.style.webkitTransform = 'translate3d(0,'+ offsetY + 'px, 0)';
}




  //so it will notice dynamically added elements also
  $(document).on("click", ".tutor-link", function(){
    var name = $(this).find('h4').text();
    location.href="./tutor_profile.html#"+name;
  });

  $(document).on("click", "#homenav", function(){
    location.href= "./index.html";
  });

  
 

 
});