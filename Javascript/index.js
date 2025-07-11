/*const todoList = [];
function addtodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  inputElement.value = "";
}*/
/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
for(let j=1;j<=5;j++)
{
    console.log(j);
}
 let k= 5;
 do {
     console.log(k);
     k++;
 }
 while (k<=10); */
/* const todoList = ["make dinner", "wash dishes", "watch youtube"];
for (i = 0; i <todoList.length ; i++) {
  let value = todoList[i];
  console.log(value);
} */
/*const num = [1, 5, 3];
let total = 0;
for (i = 0; i < num.length; i++) {
  //total = total + num[i];
  const nums= num[i];
  total =total+nums;
}
console.log(total);
*/
/* const numb = [10,20,30,25,35];
const doubleNumb=[];
for(i=0;i<numb.length;i++)
{
  let value=numb[i];  
  doubleNumb.push(value*2);
}
console.log(doubleNumb);
*/
/*const todoList = [];
function renderTodo(){
let todolistHtml = "";
todoList.forEach(function (todo, i) {
  const html = `<div>${todo.name}</div> 
    <div>${todo.dueDate}</div>
    <button class=
    "delete-todo" 
    onclick = "{todoList.splice(${i},1);
    renderTodo();
    }">Delete</button>`;
  todolistHtml = todolistHtml + html;
  console.log(todolistHtml);
});
document.querySelector(".js-todo-list").innerHTML = todolistHtml;
}
function renderTodo() {
  let todolistHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<div>${todo.name}</div> 
    <div>${todo.dueDate}</div>
    <button class=
    "delete-todo" 
    onclick = "{todoList.splice(${i},1);
    renderTodo();
    }">Delete</button>`;
    todolistHtml = todolistHtml + html;
    console.log(todolistHtml);
  }
  document.querySelector(".js-todo-list").innerHTML = todolistHtml;
}
function addtodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputelement = document.querySelector(".add-date");
  const dueDate = dateInputelement.value;
  //todoList.push({ name: name, dueDate: dueDate }); if the propety and variable names are same then we can do it in following ways.
  todoList.push({ name, dueDate }); //This is called shorthand poperty syntax.
  renderTodo();
  inputElement.value = "";
}*/
/*function greeting ()
{
  console.log("Hello bro");
}
greeting(); //This is called the calling the function or running the function.
//function is value.we can place it on variable.
const function1 = function congratulating ()
{
  console.log("congratulation");
}
//In the above the function is placing inside the variable function1 as a value.
console.log(function1);
console.log(typeof function1);
function1();//This 'll run the type of the function.
//since it is a value ,we can save it in object.
const object = {
  num:2,
  fun:function greeting()
  {
    console.log("hello bro");
  }
}
object.fun();
//passing a value into a function
function display(param)
{
  console.log(param);
}
display(2);
function shows(intoFunction)
{
  intoFunction();
}
shows(function()
{
  console.log("Let's pass a function into function");
});
setTimeout(()=>{
  console.log("hello bro");
},5000);
console.log("bye bro");*/
// ["make dinner",
//   "make breakfast",
//   "make lunch"
// ].forEach(function(value)
// {
//   console.log(value);
// });
/*["Make my life",
  "Be my wife",
  "Live your entire life with me"
].forEach((value,index)=>{
  if (value=== "Be my wife")
  {
    return;
  }
  console.log(value);
  console.log(index);
});
//Arrow function
// const arrowFunction = (value,myValue)=>{
//   console.log(value);
//   console.log(myValue);
// }
//arrowFunction("1st parameter","Second parameter");
//Arrow function having one paramter does not have to put inside a bracket.
const oneParam = value =>{
  console.log(value);
}
oneParam("This arrow funtion only have one parameter");
//One line arrow function

const oneLine = ()=>{
  return 2+3;
}
console.log(oneLine());
//Since the function have only one line so we can write it in following ways.
const twoLine = () =>2+3;
console.log(twoLine());
const arrowFunction=()=>{
  console.log("This is arrow function");
}
console.log(arrowFunction());
*/
/*const buttonElement = document.querySelector(".js-button");
const clickFunction = ()=>console.log("click");
buttonElement.addEventListener('click',()=>console.log("clickFunction"));
buttonElement.addEventListener('click',clickFunction);
buttonElement.removeEventListener('click',clickFunction);*/
const positiveValue=[1, -3, 5].filter((value, index) => {
  if (value >= 0) {
    return true;
  } else {
    return false;
  }
});
console.log(positiveValue);
const greatNumber = [1,2,3,4,5,6,7,8,9].filter((value,index)=>{
  return value>4;
})
console.log(greatNumber);
const newArray = [1,2,3].map((value,index)=>{
  return value;
});
console.log(newArray);
const anotherArray = [1,2,3].map((value,index)=>{
  return value+10;
})
console.log(anotherArray);