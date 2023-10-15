//Error object
//*custom error
// try{ 
//     let age=prompt("What is your age");
//     if(age>=150)
//     {
//         throw new ReferenceError("This is probably not true");
//     }
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//*Finally clause
try {
    let a=0;
    console.log(program);
    console.log("program ran successfully");
}
catch(error){
    console.log("this is not defined anywhere");
    console.log(p);
}
finally{
    console.log("please execute this code");
}
 
