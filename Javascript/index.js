let text ='{"employees":[{"firstName":"kalu","lastName":"Pandey"},{"firstName":"chand","lastName":"chomu"},{"firstName":"shambu","lastName":"chambu"}]}';
let obj = JSON.parse(text);
let sum=0;
for(i=0;obj.employees.length>i;i++)
{
document.getElementById("yourPage").innerHTML+=obj.employees[i].firstName+" "+obj.employees[i].lastName+"<br>";
}
let ob = '{"Name" :"Raj", "surName":"Kundra" }';
let k = JSON.parse(ob);
console.log(k.Name);
console.log(k.surName);
let Arr = '["Apple","Banana","Cat"]';
let jaArr=JSON.parse(Arr);
console.log(jaArr[0],jaArr[1]);
let rest = '{"name":"John", "Age":22 ,"birth":"2000-12-12"}';
const date = JSON.parse(rest);
date.birth = new Date(date.birth);
console.log(date.name,date.birth);
// convert a string into function.
const myStr = '{"name":"John", "age":"function(){return 23;}" ,"birth":"2000-12-12"}';
const roj = JSON.parse(myStr);
roj.age = eval("("+ roj.age +")");
document.getElementById("input-page").innerHTML = roj.name +"  "+ roj.age();
let gest = {"name":"John", "Age":22 ,"birth":"2000-12-12"};
console.log(typeof gest);
let kall = JSON.stringify(gest);
console.log(kall, typeof kall);
let arr = ["Butterfly","Dragonfly","Housefly"];
let fly = JSON.stringify(arr);
console.log(fly);
let yourObj = {name:"Rakesh",surname:"Kumar", myDate:new Date()};
let objstr = JSON.stringify(yourObj);
console.log(objstr);