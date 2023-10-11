// // learning insertion
//  let a= document.getElementsByTagName("div")[0];
// a.innerHTML='<span>Hello Guys How do you do?</span>';
//  a.innerHTML=a.innerHTML+"<span> simple simple kanchi ko dimple parne gaala<span>";
//  let div=document.createElement("div");
//  div.innerHTML="<h1>Hello world<h1>";
// // //a.appendChild(div);
// // //a.prepend(div);
// // //a.after(div);
// // //a.before(div);
// a.replaceWith(div);
// learning insert adjacent html,insert adjacent text and insert adjacent element
 let first =document.getElementById("first");
  first.insertAdjacentHTML('beforeend','<div>Hi guys </div>');
  first.insertAdjacentHTML('afterend','<div>Bye Guys</div>');
  first.insertAdjacentHTML('afterbegin','<div>This is my begining</div>');
  first.insertAdjacentHTML('beforebegin','<div>This is before begin</div>');
// first.remove();