//javascript meta programming
//1. Inspect object properties with object.key() method.
/*const myObj = {
  firstName:"Raja",
  lastName:"kaji",
  Age:27,
  Occupation:"Doctor"
}
const myArr = Object.keys(myObj);
//change the property
Object.defineProperty(myObj,"firstName",{value:"Rana",writable:true,enumerable:true,configurable:true});
document.getElementById("myPage").innerHTML=myObj.firstName;
const myfunc = new Function("a","b"," return a + b ");
let result = myfunc(5,6);
console.log(result);*/
//Proxy object logging
const Person = {
  firstName: "Raja",
  lastName: "Karki",
  Age: 24,
  Occupation: "Male ego",
};
const myProxy = new Proxy(Person, {
  get(target, props) {
    log("property:" + props);
    return target[props];
  },
  set(target, props, value) {
    log("property:" + value);
    return target[props];
  },
});
function log(message) {
  console.log(message);
  document.getElementById("myPage").innerHTML += message + "<br>";
}
myProxy.firstName = "Jhon";
myProxy.Age = 18;
let text1 = myProxy.firstName;
let text2 = myProxy.lastName;
const lesson = {work:"chalu",hardwork:"Kalu"};
let answer = Reflect.has(lesson,"work");
console.log(answer);
let ans = "work" in lesson;
console.log(ans);
Reflect.deleteProperty(lesson,"hardwork");
console.log(lesson);
let getUser = Reflect.get(lesson,"work");
console.log(getUser);
Reflect.set(lesson,"hardwork","kalu");
console.log(lesson);
function greet (message)
{
  return message+","+this.name;
}
const person = {name:"kaji"};
const loson = {name:"sarla"};
let msg = Reflect.apply(greet,loson,["Hello"]);
console.log(msg);
const colors = Reflect.construct(Array,["kalu","mamu","sanu","chanu"]);
console.log(colors);
const user = {};
Reflect.defineProperty(user,"id",{
  value:123,
  writable:false
});
console.log(user);
const myArr = new Uint16Array([0,6,2,3,4]);
const urArr = Uint8Array.of(1,6,3,4,5) ;
const ourArr = Uint8Array.from([1,2,3,4,5]) ;
console.log(myArr.find((x)=>x>2));
console.log(urArr.some((x)=>x>7));
console.log(ourArr);
console.log(ourArr.byteLength);
console.log(myArr.at(1));
console.log(myArr.constructor.name);
console.log(myArr.BYTES_PER_ELEMENT);
console.log(myArr.fill(200));
let helloArr = new Uint8Array(8);
console.log(helloArr.fill(200,0,3));
