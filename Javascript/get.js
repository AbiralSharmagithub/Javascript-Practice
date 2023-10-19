//Getter,Setter and instance of operator
class Animal {
    constructor(name){
        this._name=name;
    }
    fly()
    {
        console.log("Please let me fly");
    }
    get fname()
    {
     return this._name
    } 
      set fname(newFame)
      {
       this._name=newFame;
      }
}
let a =new Animal("Hemu")
a.fly();
console.log(a.fname);
a.fname="Jack"
console.log(a.fname);
let c="kalu";
console.log(a instanceof Animal);
console.log(c instanceof Animal);