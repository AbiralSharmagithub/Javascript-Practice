/* const todoList = [];
 function addtodo() {
   const inputElement = document.querySelector(".js-name-input");
   const name = inputElement.value;
   todoList.push(name);
   console.log(todoList);
   inputElement.value = "";
 } */
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
} */
//Arrays are references
const arrays1 = [1, 2, 3, 4];
const arrays2 = arrays1.slice(); //This will make the copies of the value of array1.
arrays2.push(5);
console.log(arrays1);
console.log(arrays2);
//Destructuring
const [firstValue, secondValue, thirdValue] = [1, 2, 3];
console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);
//More details about loop, break and continue.
for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
//It is also used in while loop
let j = 1;
while (j <= 10) {
  if (j % 3 === 0) {
     j++;
    continue;
  }
  console.log(j);
  j++;
}
function doubleArray(numb){
const doubleNumb=[];
for(k=0;k<numb.length;k++)
{
  const value=numb[k];
  doubleNumb.push(value*2);
}
return (doubleNumb);
}
console.log(doubleArray([10,20,30,25,35]));
console.log(doubleArray([1,2,3,4,5,6,7,8]));
// If we see 0 then break out this loop
function zeroNumb(myNumb){
  const zeroArray = [];
   for(l=0;l<myNumb.length;l++)
   {
    const numbValue = myNumb[l];
    if(numbValue===0)
    {
      //break;
      return zeroArray;
    }
    zeroArray.push(numbValue*2);
   }
   return zeroArray;
}
console.log(zeroNumb([1,2,3,4,0,5,6,7]));
console.log(zeroNumb([4,6,9,0,3,7]));