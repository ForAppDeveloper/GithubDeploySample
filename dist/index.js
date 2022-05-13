
// << Determine Login or Register page >>
function checkTxtEmailExist(){
    try{ txtEmail }catch(e){console.log(e);}
}

function checkUsernameExist(){
    try{ txtEmail }catch(e){console.log(e);}
}

// << Auto Login >>
function  fillUsername(value){
    username.value = value;
}

function  fillPassword(value){
    password.value = value;
}

function  clickSubmit(){
    btnSubmit.click();
}

// << Check Error >>
function clearStorageError(){
    try { sessionStorage.setItem('error', 0); } catch(e){ console.log(e); }
}

function constantlyCheckError(){
    try { sessionStorage.setItem('error', document.getElementsByClassName('errors-wrapper').length); } catch(e){ console.log(e); }
}

function getError(){
    sessionStorage.getItem('error');
}

// << Login >>
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
    sessionStorage.getItem(value);
}

// << Register >>

function removeRegStorageItem(value){
    sessionStorage.removeItem(value);
}

function listemTxtEmail(value){
    try{ txtEmail.oninput = function() {var biometric = sessionStorage.getItem(value);if(biometric && biometric != null){ biometric = JSON.parse(biometric); biometric.username = txtEmail.value; biometric = JSON.stringify(biometric);}else{biometric = {username: txtEmail.value,password: null}; biometric = JSON.stringify(biometric);}sessionStorage.setItem(value, biometric);}; } catch(e){ console.log(e)};
}

function listemTxtPassword(value){
    try{  if(txtPassword.valueOf()[0]){passwordField = txtPassword.valueOf()[0] ;}else{ passwordField = txtPassword; }; passwordField.oninput = function() {var biometric = sessionStorage.getItem(value);if(biometric && biometric != null){ biometric = JSON.parse(biometric); biometric.password = passwordField.value; biometric = JSON.stringify(biometric);}else{biometric = {username: null,password: passwordField.value}; biometric = JSON.stringify(biometric);}sessionStorage.setItem(value, biometric);}; } catch(e){ console.log(e)};
}

function getRegisterStorageItem(value){
    sessionStorage.getItem(value);
}

// << SSL Error alert >>
function alertSSLError(){
    alert('An SSL error has occured and a secure connection to the server cannot be made.');
}

function setSessionItem(value,itemValue){
    sessionStorage.setItem(value, itemValue);
