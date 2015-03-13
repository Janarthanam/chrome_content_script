
var blueToothExtensionId = "llgolpdebgflaknadolcbjblnljfnngd";

console.log("I am in the content script");


e = document.getElementById("login-otp-passwd");

if(e != null){
  console.log(e.value);
  chrome.runtime.sendMessage(blueToothExtensionId,{"type": "code"}, function(response) {
      if (!response)
        console.log("last error: " + chrome.runtime.lastError.message);
      else{
        console.log("Response from app: " + response.code);
        e.value = response.code;
      }
  });
}
