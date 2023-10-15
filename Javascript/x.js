// let a = fetch("https://goweather.herokuapp.com/weather/Nepal");
// a.then((value1)=>{
//     console.log(value1.status);
//     console.log(value1.ok);
//     return value1.json();
     
// }).then((value2)=>{
//      console.log(value2);
//  })

//Post Request
const myOptions= async (todo)=>{
let options = {
    method:"POST",
    headers:{"Content-type": "application/json"},
    body:JSON.stringify(todo),
        }
          let p= await fetch('https://jsonplaceholder.typicode.com/posts',options) 
          let response= await p.json();
          return response;
    }
    const getTodo= async()=>{
       let k= await fetch('https://jsonplaceholder.typicode.com/posts/1')
       let r =await k.json(); 
       return r;
    }
   const mainFunc = async ()=>{
    let todo=
    {
        title: 'my name',
        body: 'handsome',
        userId: 1100,
    }
    let todoli = await myOptions(todo);
    console.log(todoli);
    console.log(await getTodo(507));
   }
   mainFunc()