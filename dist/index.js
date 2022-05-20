function checkTxtEmailExist(){
    try{ txtEmail }catch(e){console.log(e);}
}

function checkUsernameExist(){
    try{ username }catch(e){console.log(e);}
}

function  fillUsername(value){
    username.value = value;
}

function  fillPassword(value){
    password.value = value;
}

function  clickSubmit(){
    btnSubmit.click();
}

function clearStorageError(){
    try { sessionStorage.setItem('error', 0); } catch(e){ console.log(e); }
}

function constantlyCheckError(){
    try { sessionStorage.setItem('error', document.getElementsByClassName('errors-wrapper').length); } catch(e){ console.log(e); }
}

function getError(){
    return sessionStorage.getItem('error');
}

function removeLoginStorageItem(value){
    sessionStorage.removeItem(value);
}

function listenUsername(value){
    try{ username.oninput = function() {var biometric = sessionStorage.getItem(value);if(biometric && biometric != null){ biometric = JSON.parse(biometric); biometric.username = username.value; biometric = JSON.stringify(biometric);}else{biometric = {username: username.value,password: null}; biometric = JSON.stringify(biometric);}sessionStorage.setItem(value, biometric);}; } catch(e){ console.log(e)};
}

function listenPassword(value){
    try{ password.oninput = function() {var biometric = sessionStorage.getItem(value);if(biometric && biometric != null){ biometric = JSON.parse(biometric); biometric.password = password.value; biometric = JSON.stringify(biometric);}else{biometric = {username: null,password: password.value}; biometric = JSON.stringify(biometric);}sessionStorage.setItem(value, biometric);}; } catch(e){ console.log(e)};
}

function listenSubmitOnclick(){
    try {btnSubmit.onclick = function() {try {if (btnSubmit.innerHTML == 'I agree') {} else {username.blur();password.blur();}}catch (e) {console.log(e)}};}catch (e) {console.log(e)};
}

function getLoginStorageItem(value){
    return sessionStorage.getItem(value);
}

function removeRegStorageItem(value){
    sessionStorage.removeItem(value);
}

function listenTxtEmail(value){
    try{ txtEmail.oninput = function() {var biometric = sessionStorage.getItem(value);if(biometric && biometric != null){ biometric = JSON.parse(biometric); biometric.username = txtEmail.value; biometric = JSON.stringify(biometric);}else{biometric = {username: txtEmail.value,password: null}; biometric = JSON.stringify(biometric);}sessionStorage.setItem(value, biometric);}; } catch(e){ console.log(e)};
}

function listenTxtPassword(value){
    try{  if(txtPassword.valueOf()[0]){passwordField = txtPassword.valueOf()[0] ;}else{ passwordField = txtPassword; }; passwordField.oninput = function() {var biometric = sessionStorage.getItem(value);if(biometric && biometric != null){ biometric = JSON.parse(biometric); biometric.password = passwordField.value; biometric = JSON.stringify(biometric);}else{biometric = {username: null,password: passwordField.value}; biometric = JSON.stringify(biometric);}sessionStorage.setItem(value, biometric);}; } catch(e){ console.log(e)};
}

function getRegisterStorageItem(value){
    return sessionStorage.getItem(value);
}

function alertSSLError(){
    alert('An SSL error has occured and a secure connection to the server cannot be made.');
}

function setSessionItem(value,itemValue){
    sessionStorage.setItem(value, itemValue);
}

function logger(value){
    console.log("this is a log >> ",value);
}