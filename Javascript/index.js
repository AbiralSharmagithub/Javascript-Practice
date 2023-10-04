//  let myArr =["Abiral",45,true,null,undefined];
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
//  myArr.push("harry");
// console.log(myArr);
// myArr.unshift("Ramlal");
// console.log(myArr);
// console.log(myArr.length);
// myArr.unshift("Raja");
// console.log(myArr);
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.push("Rame");
// console.log(myArr);
// console.log(myArr.length);
// myArr.toString()
// console.log(myArr);
// myArr.sort();
// console.log(myArr);
// let b=[1,8,4,3,7,9,5,2];
// b.sort();
// console.log(b);
// let myLovelystring = "Harry is a good boy";
// console.log(myLovelystring);
// d = myLovelystring.slice(1,4);
// console.log(d);
// d =myLovelystring.replace("Harry","Jarry");
// console,console.log(d);
// console.log(myDate);
// console.log(typeof(myDate));
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());
// console.log(myDate.getDate());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
// console.log(myDate.getSeconds());
// document.getElementById("click").click();
//  let tn =document.getElementsByTagName("div");
// console.log(tn);
//  let tn = document.getElementsByTagName("div");
//  console.log(tn);
//  let createdElement = document.createElement("p");
//  createdElement.innerHTML = "Hello guys happy deepawali"; // Corrected 'innerHTML'
//  tn[0].appendChild(createdElement);
// let tn = document.getElementsByTagName("div");
// console.log(tn);
// createdElement = document.createElement("p");
// createdElement.innerHTML = "Hello guys happy deepawallet ";
// console.log(createdElement);
// tn[0].appendChild(createdElement);
// createdElements = document.createElement("p");
// createdElements.innerHTML = "Happy Birthday Dost";
// tn[0].replaceChild(createdElements,createdElement);
// tn[0].removeChild(createdElements);
// function mouse() {
//     alert ("mouseover in click")
// }
//  window.onload=function () {
//     console.log("document is loaded again");
//  }
//  let welcome = document.getElementById("welcome");
//  click.addEventListener('click',function(){
//      console.log("We are good");
//      welcome.textContent="Hello boss";
//  })
// welcome.addEventListener('mouseover',function()
// {
//  welcome.style.backgroundColor="red";
//  console.log("Yes");
// })
// welcome.addEventListener('mouseout',function()
// {
//  welcome.style.backgroundColor="white";
//  console.log("No");
// // })
//  click.addEventListener('mouseup',function()
//  {
//   console.log("Mouse up when clicked on container");
//  });
//arrow function
// sum=(a,b)=>{
//     return a+b;
// }
// c=sum(4,5);
// console.log(c);
// set timeout and setinterval
// lamo =()=> {
//     console.log("Now,lets do it Avash");
//     // welcome.style.backgroundColor="red";
//     }
// setTimeout(lamo,2000)
//  kamo =()=> {
//      console.log("Now,lets do it Aashish");
//      welcome.style.backgroundColor="red";
//      }
//     a=setInterval(kamo,2000);
// useclearInterval/clearTimeout to cancel setTimeout/setInterval
 // Javascript local storage
 //JSON
//  const avash = ["Aashish","Prabin","Abiral","Bibek","Mukesh","Shiv"];
//  avash.forEach((aashish,index)=>{
//    document.writeln(aashish + "br");
//  }
//  );
//forEach loop Array Method
// const avash = ["Aashish", "Prabin", "Abiral", "Bibek", "Mukesh", "Shiv"];
// avash.forEach((aashish, index) => {
//   document.writeln(aashish + "<br>");
// });
// Map method 
// const array = [2,1,3,4,11,31,6];
// const even =array.filter((value)=>{
//     return(value%2 ==0);
// }
// ).map((value)=>{
//     return (value*2);});
// document.writeln("Output="+even+"<br>");
// console.log("Output=",even);
// const sum =even.reduce((n1,n2)=>{
// return(n1+n2);
// })
// document.write("The sum of the number is"+sum);
// console.log("The sum of the no. is ",sum);

//Sorting
// const num= [50,10,100,150,60,70,80];
// num.sort(); 
// console.log(num);
// num.sort((a,b)=>{
//     return(b-a);
// } )
// console.log(num);
const total =[30,40,10,100,70,80,50,20,45,65,25,79,35,78,12,58];
const num = total.sort((a,b)=>{
    return (a-b);
})
const first= num[0];
const last=num[num.length-1];
const middle=num[num.length-1]/2;
const average=(first+last)/middle;
console.log(first);
console.log(last);
console.log(middle);
document.write(average);
console.log(average);



