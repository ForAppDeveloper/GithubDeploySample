var publicKey = null;
$(document).ready(function(){
	if (self != top) {
		//$('body').css("display", "none");
		document.querySelector('body').style.display  = 'none';
		/*$('body').attr("style", "display: inline !important");*/
		$('body').hide();
		top.location = self.location;
	}
	publicKey = $('#pubKey').val();
	$('#pubKey').remove();
	
$('#username').blur(function() {
	  $(this).val(function(_, inputText){
	      return inputText.trim();
	  });
});

$('#password').blur(function() {
	  $(this).val(function(_, inputText){
	      return inputText.trim();
	  });
});
});

$(document).on('click', '#btnSubmit', function() {

  var hasError = false
  var great_id = $('#username').val();
  var password = $('#password').val();
  console.log("GREAD ID",great_id);
  console.log("password",password);
  if (password == '') {
    $('label.error[for="password"]').removeClass('hidden')
    hasError = true;
  } else {
    $('label.error[for="password"]').addClass('hidden')
  }

  if (great_id == '') {
    hasError = true;
    $('label.error[for="username"]').removeClass('hidden')
  } else {
    $('label.error[for="username"]').addClass('hidden')
  }
  
  return false;
})

