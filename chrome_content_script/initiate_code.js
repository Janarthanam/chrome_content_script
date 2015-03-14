
var blueToothExtensionId = "llgolpdebgflaknadolcbjblnljfnngd";

console.log("I am in the content script");

var port = chrome.runtime.connect(blueToothExtensionId);
var posted = false;
var interval = setInterval(function(){
  e = document.getElementById("login-otp-passwd");
  if(e== null)
    return;
  if(!posted){
    posted = true;
    port.postMessage({"type": "code"});
    console.log("posted message");
    port.onMessage.addListener(function(response) {
        console.log(response);
        if (!response)
          console.log("last error: " + chrome.runtime.lastError.message);
        else{
          console.log("Response from app: " + response.code);
          if(response.code){
             e.value = response.code;
             clearInterval(interval);
             /*btn = document.getElementById("login-otp-signin");
             if(btn)
              btn.*/
          }
        }
    });
  }
},1000);


/*var port = chrome.runtime.connect(blueToothExtensionId);
console.log("Port " + port);
port.onMessage.addListener(function(response) {
        console.log(response);
        if (!response)
          console.log("last error: " + chrome.runtime.lastError.message);
        else{
          console.log("Response from app: " + response.code);
          if(response.code){
             //e.value = response.code;
             console.log(response.code);
             clearInterval(interval);
          }
        }
    });
port.postMessage({"type": "code"});*/


/*
var codeFetched = null;
var interval = setInterval(function(){
  e = document.getElementById("login-otp-passwd");
  if( e == null)
    return;
  console.log(e.value);
  port.postMessage({"type": "code"});
  port.onMessage.addListener(function(response) {
      if (!response)
        console.log("last error: " + chrome.runtime.lastError.message);
      else{
        console.log("Response from app: " + response.code);
        if(response.code){
           codeFetched = true;
           e.value = response.code;
        }
      }
  });
  /*chrome.runtime.sendMessage(blueToothExtensionId,{"type": "code"}, function(response) {
      if (!response)
        console.log("last error: " + chrome.runtime.lastError.message);
      else{
        console.log("Response from app: " + response.code);
        if(response.code){
           codeFetched = true;
           e.value = response.code;
        }
      }
  });*/
  /*if(codeFetched)
      clearInterval(interval);
},10000);*/

