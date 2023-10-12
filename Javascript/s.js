//synchronous and asynchronous functions
//synchronous function
 let a=prompt("Who is favourite actor");
let b=prompt("who is your favourite actress");
 console.log(`my favourite actor is ${a} and my favourite actress is ${b}`);
//Asynchronous function
console.log("Start");
setTimeout(()=>{
console.log("Who's your daddy");
},3000);
console.log("End");
