//Again go for promises
const promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Please I have to know this");
    resolve();
  },3000)
})
promise.then(()=>{
  console.log("please let me know If I'm executed");
})
new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("please make this happened");
    resolve();
  },1000)
}).then(()=>{
  console.log("You nailed it bro");
})
const newPromise =new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Read the whole data");
    resolve({Name:"Aashish",LastName:"karki"});
  },2000)
})
newPromise.then((value)=>{
  console.log(value);
})
const promiseOne = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let error=false;
    if(!error){
    resolve({name:"Avash Ghimire",occupation:"Senior Developer"})
    }
    else
    {
    reject("I'm rejected")
    }
  },4000)
})
promiseOne.then((myvalue)=>{
  console.log(myvalue);
  return myvalue.name;
}).then((myname)=>{
console.log(myname);
}).catch((now)=>{
  console.log(now);
}).finally(()=>{
  console.log("I execute at everytime");
})

const promiseTwo = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let error=false;
    if(!error){
    resolve({name:"Aashish Karki",occupation:"Intern"})
    }
    else
    {
    reject("I'm rejected")
    }
  },6000)
})
const myResponse=async ()=>{
  try{
    const response=await promiseTwo;
    console.log(response);
  }
  catch(error){
    console.log(error);
  }
}
myResponse()

// const myUsers = async () => {
//   try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//      const data = await response.json();
//      console.log(data);
//    } catch (error) {
//      console.log(error);
//    }
//  }

// myUsers();
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((value)=>{
  console.log(value);
  return value.json();
})
.then((myvalue)=>{
console.log(myvalue);
})
.catch((error)=>{
  console.log(error);
})


