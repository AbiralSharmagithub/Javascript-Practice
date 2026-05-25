//learn advance object
/* const obj = {
  firstName:"Raja",
  lastName:"Mouli"
 }
 const sub =  Object.create(obj);
 console.log(sub.firstName);
 console.log(sub.lastName);
 // javascript object from entries
 const fruits = [["apples",300],["mango",400],["strawberry",800],["banana",1000]];
 let fruit = Object.fromEntries(fruits);
 console.log(fruit);
 //object.assign method
 const person1 = {
  firstName: "Kalika",
  lastName: "Chalika",
  Age: 50
 };
 const person2 = {
  firstName: "Talika",
  lastName: "Halika",
 };
 Object.assign(person1,person2);
 console.log(person1.firstName,person1.lastName,person1.Age);
*/
// this as a object
/*const person1 = {
  firstName:"Aashish",
  lastName:"Karki",
  fullName:function() {
    return " Hello " + this.firstName + this.lastName;  
  }
 }
let text = person1.fullName();
document.getElementById("yourPage").innerHTML = text;
const person2 = {
  firstName:"Aashish",
  lastName:"Karki",
  fullName:function() {
    return this;  
  }
 }
 document.getElementById("myPage").innerHTML = person2.fullName();
 // function borrowing with bind method
 const person =  {
  firstName: "Raja",
  lastName: "Mauli",
  fullName:function(){
    console.log("My name is"+this.firstName+" "+this.lastName);
  }
 }
 const member = {
  firstName: "Raghu",
  lastName: "Chalise"
 }
 let fullName = person.fullName.bind(member);
 document.getElementById("myPage").innerHTML = fullName();
*/
//object iteration
//javascript object method
// 1. object assign
//source object
/*const person1 ={
  firstName: "Shani",
  lastName: "Nani",
  Address: "Khandala",
  Age: 36
}
//target object
const person2 = {
  firstName: "Aakash",
  lastName: "Shrestha"
}
let text = Object.assign(person1,person2);
console.log(typeof text);
document.getElementById("yourPage").innerHTML = Object.entries(text);*/
// 2. object.entries(){It returns array of key/value pairs in an object.}
/*const person1 ={
  firstName: "Shani",
  lastName: "Nani",
  Address: "Khandala",
  Age: 36
}
console.log(Object.entries(person1));
document.getElementById("yourPage").innerHTML=Object.entries(person1);
const fruits = {Bananas:300, Orange:400, Apple:700};
let text="";
for(let[fruit,value] of Object.entries(fruits))
{
  text += "The value of " + fruit+" " +"is " + value + "<br>";
}
document.getElementById("yourPage").innerHTML = text; */
/*const person1 = [
  ["firstName", "Shani"],
  ["lastName", "Nani"],
  ["Address", "Khandala"],
  ["Age", 36]
];
const myObj = Object.fromEntries(person1);
console.log(myObj);
document.getElementById("yourPage").innerText = myObj;
console.log(Object.values(myObj));*/
/*
const person = [
  { name: "Banana", quantity: "200" },
  { name: "Apple", quantity: "150" },
  {name: "Orange",quantity: "300"},
  {name: "Mango",quantity: "500"}
];
function callBack({quantity})
{
  return quantity > 200 ? "ok" : "low";
}
const result = Object.groupBy(person,callBack);
let text = "These fruits are ok: <br>";
for(let[x,y] of result.ok.entries())
{
  text += y.name + ":" + y.quantity +"<br>";
}
 text += "These fruits are low: <br>";
for(let [x,y] of result.low.entries())
{
  text += y.name + ":" + y.quantity +"<br>";
}
document.getElementById("yourPage").innerHTML = text;*/ 
//object.keys(){It returns an array with key of an object}
/*const person = {
  name:"Kale",
  class: 8,
  section: "B",
  cast: "Brahmin"
}
console.log(Object.keys(person));
let text="";
for (let x in person){
   text += person[x];
}
console.log(text);*/
//javascript object accessor
/*const person = {
  name:"Kale",
  class: 8,
  section: "B",
  cast: "Brahmin",
  set sang(lang){
    return this.language = lang;
  },
  get myCast(){
   return this.cast; 
  }
};
person.sang="en";
console.log(person.myCast);
console.log(person.language)*/
//object management
//1.Object.define property
/*const person = {
  fistName: "Raja",
  lastName: "kumar",
  language: "en"
} 
Object.defineProperty(person,"year",{value:"1999",enumerable:true});
Object.defineProperty(person,"language",{enumerable:false});
console.log(Object.getOwnPropertyNames(person));
console.log(Object.keys(person));
const person1 = {
  fistName: "Raja",
  lastName: "kumar"
} 
Object.freeze(person1);
console.log(Object.isFrozen(person1));
console.log(Object.isExtensible(person1))
Object.defineProperty(person1,"fullName",{get(){return this.fistName+" "+this.lastName}})
console.log(person1.fullName);*/
/*console.log(Date.prototype);
console.log(Array.prototype);
console.log(Object.prototype);*/
//Add properties to the existing object constructor
/*function Person(name,age,height,weight)
{
  this.firstName = name;
  this.age = age;
  this.height = height;
  this.weight = weight;
}
const myFather = new Person("Hari",25,"5ft","60kg");
Person.prototype.nationality = "Nepali";
Person.prototype.kali=function(){
  return "Hello kalii";
}
console.log(myFather);
console.log(typeof myFather);
console.log(myFather.nationality);
console.log(myFather.kali());
*/
/*class Car {
  constructor(name,year)
  {
    this.name = name;
    this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  const date = new Date();
  const year = date.getFullYear();
const myName = new Car("ferrari",2014);
console.log(myName);
console.log(typeof myName);
console.log(myName.age(year));
class myCar{
  constructor(brand)
  {
    this.brand = brand;
  }
  present ()
  {
    return `I have ${this.brand} car.`
  }
}
  class Model extends myCar {
    constructor(brand,model) {
         super(brand);
        this.model = model;
    }
    show()
    {
      return this.present() + ",it is a " + this.model;
    }
  }
let ourCar = new Model("Audi", 4576);
console.log(ourCar.show());*/
/*class Car {
  constructor(name)
  {
    this._name = name;
  }
  get cname(){
    return this._name;
  }
  set cname(c){
   return this._name = c;
  }
}
const myCar= new Car("Audi");
console.log(myCar.cname)
console.log(myCar.cname="Merceedes");
class room {
  static myroom()
  {
    return "Our room.";
  }
}
const doom = new room();
console.log(doom.myroom());
console.log(room.myroom());*/