//web API
function geoLocation()
{
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  catch(err) {
  document.getElementById("yourPage").innerHTML=err;
  }
}
function showPosition(position)
{
  document.getElementById("yourPage").innerHTML="latitude:" + position.coords.latitude + "<br>longitude" + position.coords.latitude;
}
let file = "file_info.txt";
fetch(file)
.then(x=>x.text())
.then(y=>document.getElementById("myPage").innerHTML=y);
function callme()
{
  console.log("clicked");
  window.history.back();
}
console.log(history.length);
localStorage.setItem("name","john");
document.getElementById("ourPage").innerHTML = localStorage.getItem("name");
function ourFunction()
{
  let myid = document.getElementById("id1");
  if(myid.validity.rangeUnderflow)
  {
    document.getElementById("input-page").innerHTML="value too low";
  }
  else
  {
    document.getElementById("input-page").innerHTML="value too large";
  }
}
