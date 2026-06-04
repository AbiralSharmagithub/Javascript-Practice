//Asynchronous
//1.Asynchronous intro
/*function display(a)
{
  document.getElementById("yourPage").innerHTML+=" "+ a + "";
}
setTimeout(function(){
  display("E")
},2000);
setTimeout(function(){
  display("k")
},1000);
display("A");
display("B");
display("C");
function startTime ()
{
  document.getElementById("myPage").innerHTML = Date();
}*/
//In the above it shows that it display from top to bottom.
//1 Async Timeout
/*setInterval(myFunction,1000);
function myFunction()
{
  const d = new Date();
  document.getElementById("myPage").innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(); 
}*/
//2 Callback function
/*document.getElementById("start").addEventListener("click",display)
function display ()
{
  alert("Let me do my work");
}*/
//sequence control
/*function displayvalue(value){
  document.getElementById("myPage").innerHTML = value;
}
function num(num1,num2,displayer)
{
 let result = num1+num2;
 displayer(result);
}
num(4,5,displayvalue);*/
//callback error handling
/*function myDisplayer(value) {
  document.getElementById("myPage").innerHTML = value;
}
function getData(callBack) {
  let ok = false;
  if (ok) {
    callBack(null, "Data");
  } else {
    callBack("something is wrong", null);
  }
}
getData(function (error, data) {
  if (error) {
    myDisplayer(error);
   return;
  }
  myDisplayer(data);
});*/
/*function myDisplayer(some) {
  document.getElementById("myPage").innerHTML += some + "<br>";
}
let myPromise = new Promise(function (resolve, reject) {
  let ok = false;
  if (ok) {
    resolve(6);
  } else {
    reject("error");
  }
});
myPromise.then(
  function (value) {
    myDisplayer(value);
    return value*4;
  },
).catch(function (value) {
    myDisplayer(value);
  })
*/
/*function myDisplayer(some) {
  document.getElementById("myPage").innerHTML = some;
}
function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.resolve(value + "B");
}
function step3(value) {
  return Promise.resolve(value + "C");
}
step1()
  .then(function (value) {
    return step2(value);
  })
  .then(function () {
    return step3(value);
  })
  .then(function(value){myDisplayer(value)}).catch(function(error){console.log(error)});
  ;*/
//promises for timeout
let ourPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    (resolve("Hello Sharma,How are you?"), 3000);
  });
});
ourPromise.then(function (allo) {
  document.getElementById("yourPage").innerHTML = allo;
});
//async and await
function ourDisplayer(some) {
  document.getElementById("myPage").innerHTML = some;
}
function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.resolve(value + "B");
}
function step3(value) {
  return Promise.resolve(value + "C");
}
async function runIt() {
  let v1 =  await step1();
  let v2 =  await step2(v1);
  let v3 =  await step3(v2);
  ourDisplayer(v3);
}
runIt();
function fail() {
  return Promise.reject("failed");
}
async function run() {
  try { 
    let value = fail();
    console.log(value);
  }
  catch(error)
  {
    console.log(error);
  }
}
run();
// fetch() returns a promise
fetch("data.json").
then(function(response){
  return response.json();
}).then(function(value){
console.log(value);
})
//fetch with async await
async function fetc() {
  let response = await fetch(data.json);
  let data = await response.json();
  console.log(data);
}  
fetc();
async function myData()
{
  let response = await fetch(missing.json);
  if(!response.ok)
  {
    console.log("Https Errors",response.status);
  }
  let myData = await response.json;
  console.log(myData);
}
myData();
//try and catch 
async function loadData () {
  try {
    let response = await fetch("data.json");
    let data = await response.json();
    console.log(data);
  }
  catch(error){
    console.log("Network error");
  }
}