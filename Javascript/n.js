// learning insertion
 let a= document.getElementsByTagName("div")[0];
a.innerHTML='<span>Hello Guys How do you do?</span>';
 a.innerHTML=a.innerHTML+"<span> simple simple kanchi ko dimple parne gaala<span>";
 let div=document.createElement("div");
 div.innerHTML="<h1>Hello world<h1>";
// //a.appendChild(div);
// //a.prepend(div);
// //a.after(div);
// //a.before(div);
a.replaceWith(div);
