//learn promises
// let promise1=new Promise((resolve,reject)=>{
//     console.log("your promise is pending");
//     setTimeout(()=>{
//      console.log("your promise is fulfilled");
//      resolve("true");
//     },5000)
// });
// let promise2=new Promise((resolve,reject)=>{
//     console.log("your promise is pending");
//     setTimeout(()=>{
//      console.log("your promise is rejected");
//     reject(new Error("This is an error"));
//     },5000)
// });
// promise1.then((value)=>{
//     console.log(value);
// })
// promise2.catch((error)=>{
//     console.log(error);
// })

//Promise chaining 
// let p1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Resolved after two seconds")
//     resolve(55);
//   },2000);  
// });
// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve,reject)=>{
//         resolve("promise2");
//     })
//     return p2;
// }
// ).then((value)=>{
//     console.log(value);
//     let p3=new Promise((resolve,reject)=>{
//         reject('your request is rejected');
//     })
//     return p3;
// }).catch((error)=>{
//     console.log(error);
// });
// const loadScript= (src)=>{
//     let promise= new Promise((resolve,reject)=>{
//         let script=document.createElement("script");
//         script.src=src;
//         script.type="text/javascript";
//         document.head.appendChild(script);
//         script.onload=()=>{
//             resolve("This script has been loaded");
//         }
//         script.onerror=()=>{
//             reject("This script has been rejected");
//         }
//     }) 
// return promise;
// }
// let p1=loadScript("https://www.youtube.com/");
// p1.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

//Promise API methods
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value1");
//     },5000);
// });
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value2");
//        // reject(new Error("It is rejected"));
//     },3000);
// });
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        // resolve("value3");
//        reject("value 3 is rejected");
//     },2000);
// });
// // let promise_all=Promise.all([p1,p2,p3]);
// // let promise_allSettled=Promise.allSettled([p1,p2,p3]);
// // let promise_race=Promise.race([p1,p2,p3]);
// // let promise_any=Promise.any([p1,p2,p3]);
// let promise_all =Promise.resolve(6);
//  promise_all =Promise.reject(new Error("hey"));
// promise_all.then((value)=>{
//     console.log(value);
// })
