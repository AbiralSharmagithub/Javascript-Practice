//callback function
// const loadScript=(src,callback)=>{
// let script=document.createElement("script");
// script.src=src;
// document.body.appendChild(script);
// script.onload=()=>{
// console.log("script loaded",src);
// callback();
// }
// document.head.append("head");
// }
// const hello=()=>console.log("who's your daddy");
// const bye=()=>console.log("Nobody does it better");
// loadScript("https://www.facebook.com/",hello);
//Error handle
const loadScript=(src,callback)=>{
    let script=document.createElement("script");
    script.src=src;
    document.body.appendChild(script);
    script.onload=()=>{
    console.log("script loaded",src);
    callback(null,src);
    }
    script.onerror=()=>{
        console.log("script has shown error");
        callback(new Error("Src got some error"));
    }
    document.head.append("head");
    }
    const hello=(error,src)=>{
        if(error){
            console.log(error);
           }
        alert("hello world"+src);
    }
    const bye=(error,src)=>{
        if(error){
            console.log(error);
        }
        alert("Bye Bye world"+src);
    }
    loadScript("https://www.facebook.com/",bye);