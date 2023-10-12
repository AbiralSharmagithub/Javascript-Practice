//Events and events handlers
// const button = document.querySelector(".button");
// const para = document.getElementsByClassName("para")[0];
// button.onclick=()=>{
//     alert("you have clicked me");
//     const a=document.createElement("P");
//     a.innerHTML="<p>Hey guys how are you?</p>";
//     para.appendChild(a);
// }
const btn =document.getElementById("btn");
let a = prompt("choose between 1 and 2");
let x= (event)=>{
    alert("hello world 1");
    console.log(event);
    console.log(event.target);
    console.log(event,event.clientY,event.clientX);
 };
 let y= (event)=>{
         alert("hello world 2");
         console.log(event);
         console.log(event.target);
         console.log(event,event.clientY,event.clientX);
     };
  btn.addEventListener('click',x);
 btn.addEventListener('click',y);
 if (a == 1) {
     btn.removeEventListener('click', y); 
 } 
 else if (a == 2) {
     btn.removeEventListener('click',x);
 } 
 else {

     alert("You have  1 and 2 options only");
 }