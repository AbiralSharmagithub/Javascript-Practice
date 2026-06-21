const raj = document.getElementsByTagName("p");
console.log(raj);
//windows
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(screen.availWidth);
console.log(screen.colorDepth);
console.log(window.location.href);
console.log(screen.pixelDepth);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.port);
console.log(history.back());
console.log(navigator.cookieEnabled);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.product);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.javaEnabled());
function callme()
{
  var text;
  if(confirm("text button"))
  {
    text = "You pressed ok";
  }
  else 
    {
    text = "You pressed cancel";
  }
 document.getElementById("myPage").innerHTML = text;
}
/*setInterval(function raj(){
  console.log("Raj");
},1000);
function chor()
{
  clearInterval();
}*/
username = "Rakesh";
let x = document.cookie;
console.log(x);
//javascript cookie
function setCookie (cname,cvalue,exdays)
{
const d = new Date();

}


