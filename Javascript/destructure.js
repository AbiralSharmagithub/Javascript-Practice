//Destructuring and spread operator.
let arr=[4,5,6,7,8,9,10,22];
// let [a,b,c,...rest]=arr;
// console.log(a,b,c,rest);
//  let [a,,,...rest]=arr;
//  console.log(a,rest);
// let [a,,b,...rest]=arr;
//  console.log(a,b,rest);
// let {c,d}={c:1,d:3};
// console.log(c,d);
// const obj ={e:7,f:9};
// const{a,b}=obj;

//spread operator
const array =[9,3,4,5,0];
const obj= {...array};
console.log(obj);
const sum=(a,b,c,d,e)=>{
return a+b+c+d+e;
}
console.log(sum(...array));