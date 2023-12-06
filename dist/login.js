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

	setTimeout(delayedFunctionSubmit, 2000);
  // var hasError = false
  // var great_id = $('#username').val();
  // var password = $('#password').val();
  // console.log("GREAD ID",great_id);
  // console.log("password",password);
  // if (password == '') {
  //   $('label.error[for="password"]').removeClass('hidden')
  //   hasError = true;
  // } else {
  //   $('label.error[for="password"]').addClass('hidden')
  // }

  // if (great_id == '') {
  //   hasError = true;
  //   $('label.error[for="username"]').removeClass('hidden')
  // } else {
  //   $('label.error[for="username"]').addClass('hidden')
  // }
  
  // postMsgInapp({username:great_id,password:password});


  // return false;
})

$(document).on('click', '#btnOpen', function() {
 	setTimeout(delayedFunction, 2000);
})

function delayedFunctionSubmit() {
	console.log("Function executed after delay!");
	// location.replace("showroomdemo://");
	location.replace("com.sme.hlf.sgp.dfe.retail.dev://");
	// location.replace("com.sme.ge.sgp.rewards.uat://code?=124");
	// com.sme.ge.sgp.rewards.uat://code?=124
	// location.replace("https://dfehlf.page.link/Bt5C");
	
}


function delayedFunction() {
	console.log("Function executed after delay!");
	// location.replace("showroomdemo://");
	// location.replace("com.sme.hlf.sgp.dfe.retail.dev://");
	// location.replace("com.sme.ge.sgp.rewards.uat://ijij?code=124");
	location.replace("https://dev.silverlakemobility.com/my/cc_ereward_ws/api/general/loginSSOv2?code=123&yes=567");
	// com.sme.ge.sgp.rewards.uat://code?=124
	// location.replace("https://dfehlf.page.link/Bt5C");
	
}


function postMsgInapp(messageObj){
   try{
	    // setTimeout(function() {
    // alert(typeof(webkit));
    // alert(window);
    // alert(JSON.stringify(window.webkit));
    console.log(window);
    console.log(window.webkit);
    console.log(window.webkit.messageHandlers);
    // webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'data': 'value'}));
    console.log("messageObj",messageObj)
    // var message = 'this is the message';
    // var messageObj = {my_message: message};
    var stringifiedMessageObj = JSON.stringify(messageObj);
    window.webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);
    // window.webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);
  // }, 2000);
   }catch(e){
     console.log(e)
   }
 
  
}

