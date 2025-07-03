const myArray = [10, 20, 30];
console.log(myArray);
console.log(myArray[0]);
myArray[0] = 99;
console.log(myArray);
//We can put any value in array
const yourArray = [1, "Hello", true, { name: "Sharma" }, [1, 2]];
console.log(yourArray[4]);
console.log(typeof yourArray[4]);//It is just a special type of object.
//properties
console.log(myArray.length);
console.log(yourArray.length);
myArray.push(50);
yourArray.push("Hancy");
console.log(myArray);
console.log(myArray.length);
console.log(yourArray);
console.log(yourArray.length);
myArray.splice(0,2);
console.log(myArray);

