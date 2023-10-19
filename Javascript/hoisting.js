//Hoisting
//In this code can be executed before decalaration but not before intialization
//console.log(a);
c();
function c(){//Declaration hoisted to the top 
console.log("I'm good");
}
//let a=5;

const d=()=>{//But intialization is not hoisted to the top
    return k+l;
}
let k=8;
let l=9;
sum=d();
console.log(sum);
let m= 8;//In let and const there are no hoisting
console.log(m);
console.log(n);//It prints undefined
var n=45;
console.log(n);//It prints the value of n