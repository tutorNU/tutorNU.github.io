$(document).ready(function(){

	$('#header .container').html("<center><h2>Tutor Profile</h2></center>");
//<span id='back' class='glyphicon glyphicon-chevron-left'></span>

	$('#profileTabs a').click(function(e){
  		e.preventDefault();
  		$(this).tab('show');
	});


	$('#back').click(function(){
		window.history.back();
	});










});