//Async/Await
// const avash= async()=>{
//     return(67);
// }
// avash().then((x)=>{
//     console.log(x);
//     alert(x);
// })
const avash = async()=>{
    let pOne=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I have to wait until I m executed")
        },2000)
    })
    let pTwo=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I have to wait until p1 executed")
        },6000)
    })
    console.log("First execute pOne");
    let p1=await pOne;
    console.log("Now execute pOne:" +p1);
    let p2=await pTwo;
    console.log("Now execute pTwo:" +p2);
    return([p1,p2]);
}
const aashish = ()=>{
    setTimeout(()=>{
    console.log("My another function")
},5000)};
const dipace= async ()=>{
let a=await avash();
let b=await aashish();
}
dipace();
