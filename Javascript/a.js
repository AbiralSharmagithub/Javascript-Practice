let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};
/* if (!score) {
   score = {
     wins: 0,
     loses: 0,
     ties: 0,
   };
} 
*/
/* if(score === null) {
   score = {
     wins: 0,
     loses: 0,
     ties: 0,
    };
}
*/
function pickComputermove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  } else {
    alert("Select available no.");
  }
  return computerMove;
}
function playGame(playerMove) {
  {
    const computerMove = pickComputermove();
    let conclusion = "";
    if (computerMove === playerMove) {
      conclusion = "Tied";
      score.ties += 1;
    } else if (
      (playerMove === "rock" && computerMove === "scissor") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissor" && computerMove === "paper")
    ) {
      conclusion = "won";
      score.wins += 1;
    } else {
      conclusion = "lost";
      score.loses += 1;
    }
    // local storage
    localStorage.setItem("score", JSON.stringify(score));
    alert(
      `You picked ${playerMove}. Computer picked ${computerMove}.You ${conclusion}
      wins:${score.wins}, loses:${score.loses}, ties:${score.ties}`
    );
  }
}

// object learning
/*const obj = {
  name: "kalu",
  price: 500,
};
console.log(obj); 
const identity = obj.name;
const value = obj.price;
console.log(identity);
console.log(value);
obj.name = "shyam";
obj.price = 700;
console.log(obj);
console.log(obj.notExist);
console.log(obj.sathi);
obj.sathi = "Ramesh";
console.log(obj);
delete obj.price;
console.log(obj);
console.log(typeof obj); */
// const product1 = {
//   name: "T-shirt",
//   ["delivery-time"]: "1 day",
//   rating: {
//     star: 4.5,
//     count: 87,
//   },
//   fun: function create() {
//     console.log("function inside an object");
//   },
// };
// console.log(product1);
// console.log(product1.name);
// console.log(product1["name"]);
// console.log(product1["delivery-time"]);
// console.log(product1["rating"]["count"]);
// const product4 = {
//   name: "white-shirt",
//   Address: "Tikapur-Airport",
// };
// console.log(product4["Address"]);
// const product5 = {
//   name: "T-shirt",
//   ["delivery-time"]: "1 day",
//   rating: {
//     star: 4.5,
//     count: 87,
//   },
//   fun: function create() {
//     console.log("function inside an object");
//   },
// };
// product5["fun"]();
console.log(typeof console); /*This displays object */
console.log(typeof log); /*This displays function */
/* Built in object */
// JSON

const product4 = {
  sale: 40,
  "Books-name": "Harry Potter",
  rating: {
    star: 4.5,
    count: 87,
  },
  fun: function create() {
    console.log("function insdide an object");
  },
};
console.log(JSON.stringify(product4)); //It converts javascript object into JSON object.
const jsonstring = JSON.stringify(product4);
console.log(JSON.parse(jsonstring)); //It converts Json object into Javascript object.
