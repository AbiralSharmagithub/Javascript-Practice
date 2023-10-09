const k =first.getAttribute("class");//get the value of an attribute
let kalu=document.getElementById("first");
console.log(k);
console.log(first.hasAttribute("class"));//check the existence of attribute
console.log(first.hasAttribute("style"));//check the existence of attribute
kalu.setAttribute("hidden","true"); //It sets the attribute in existence elements
kalu.setAttribute("class","hello baby");//It sets the attribute in existence elements
kalu.removeAttribute("class");//It removes the class
kalu.removeAttribute("id");//It removes the id