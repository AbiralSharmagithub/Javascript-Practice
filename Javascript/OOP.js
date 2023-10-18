//learn OOP
//prototype inheritance
// let a={
//     name1:"Avash",
//     occuptation:"Senior Developer",
// }
// console.log(a);
// let p ={
//     func:()=>{
//   console.log("hello guys");
//     }
// }
// a.__proto__ = p;
// p.__proto__={
//     name:"Abiral"
// }
// a.func()
// console.log(a.name);
// //Classes and Objects
// class Aashish {
//     fail()
//     {
//         alert(this.myname+"Fail in every semester");
//     }
//     pass()
//     {
//         alert(this.myname +"Aashish pass rey?,Hassauxa shera lay");
//     }
//     fill(givenname)
//     {
//         this.myname=givenname;
//     }
// }

// let failed= new Aashish()
// let againFailed= new Aashish()
// failed.fill("Karki Don");
// againFailed.fill("Karki wrong");
// failed.fail();
// againFailed.pass();

//Constructor
// class ram {
//     constructor(a,b)
//     {   console.log("Who is that person")
//         console.log(a+" "+"is getting no. of" +" "+b);
//     }
// }
// let shyam= new ram();
// let kaam=new ram("Hari","banana's");

//Inheritance
// class Animals{
//     constructor(){
//         console.log("living beings");
//     }
//     eye(){
//         console.log("Two eyes");
//     }
//     teeth(){
//         console.log("no.of teeths")
//     }
// }
// class Monkeys extends Animals {
//     eatbanana(){
//         console.log("Eats banana");
//     }
//     climbtree()
//     {
//         console.log("climb on tree");
//     }
// }
// let living=new Animals();
// living.eye();
// living.teeth();

//Method overriding
// class overriding {
//     constructor(){
//         console.log("lets do the overriding");
//     }
//     need(){
//         console.log("need to override here");
//     }
//     run(){
//         console.log("Run my code");
//     }
// }
// class overridden extends overriding {
//    yes(){
//    console.log("here I'm going to over ride ");
//    }
//    run(){
//     console.log("This parent class method is overriden in child class method")
//    }
//    leaves(leave){
//     console.log(`You got a leave for ${leave}`);
//    }
// }
// class override extends overridden {
//     //In this child class the consructor of parent automatically call due to V8 engine
//     //constructor {
//     //    super()
//     //}(It is automaticallu call)
//     //Now to override it parent class constructor 
//     constructor(){
//         super()
//         {
//             console.log("Another constructor is written");
//         }
//     }
//   leaves(){
//   super.leaves(4)
//   console.log("Add one extra day");
// }
// }
// let myoveride= new override();
// myoveride.need();
// myoveride.yes();
// myoveride.run();
// myoveride.leaves(3);

// static method in javascript
// class Method {
//     instanceMethod(){
//         console.log("This one is instance");
//     }
//     static staticMethod(){
//         console.log("This one is static method");
//     }
// }
// let p = new Method();
// p.instanceMethod();//This is calling from instance object.
// Method.staticMethod();//This is calling from its own class itself.
