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
//window object.
window.console.log("Window");
updateScoreElement();
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
      conclusion = "You won";
      score.wins += 1;
    } else {
      conclusion = " You lost";
      score.loses += 1;
    }
    updateScoreElement();
    document.querySelector(".js-result").innerHTML = conclusion;
    document.querySelector(
      ".js-moves"
    ).innerHTML = `You ${playerMove}-${computerMove} computer`;
    // local storage
    localStorage.setItem("score", JSON.stringify(score));
    /*alert(
      `You picked ${playerMove}. Computer picked ${computerMove}.You ${conclusion}
      wins:${score.wins}, loses:${score.loses}, ties:${score.ties}`
    );
    */
  }
}
function resetElement() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins:${score.wins}, loses:${score.loses}, ties:${score.ties}`;
}
document.querySelector(
  ".js-shipping"
).innerHTML = `Orders under $${40} = +$${10} shipping.`;
document.querySelector(
  ".js-free-shipping"
).innerHTML = `Orders over $${40} = Free shipping.`;
function totalCost() {
  let inputData = document.querySelector("input").value;
  if (inputData < 40) {
    document.querySelector(".total-cost").innerHTML = `$${
      Number(inputData) + 10
    }`;
  } else {
    document.querySelector(".total-cost").innerHTML = `$${Number(inputData)}`;
  }
}
function handleCost(event) {
  if (event.key === "Enter") {
    totalCost();
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
//console.log(typeof console); /*This displays object */
//console.log(typeof log); /*This displays function */
/* Built in object */
// JSON

/*const product4 = {
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
console.log(JSON.parse(jsonstring)); //It converts Json object into Javascript object.*/
//Document Object Model
/*
document.body.innerHTML = "Hello";
document.title = "Good job!";
*/
/* console.log(document.body.innerHTML);
document.body.innerHTML = " <button>Please Click here.</button>";
*/
/*console.log(document.querySelector("button"));
console.log(document.querySelector("button").innerHTML);
document.querySelector("button").innerHTML = "Text outside the button element";
console.log(document.querySelector("button").innerHTML);
document.querySelector("button").innerHTML = "Changed";
console.log(document.querySelector(".js-button"));
console.log(document.querySelector(".js-button").innerHTML);*/
const buttonElement = document.querySelector(".js-subscribe-button");
// console.log(buttonElement);
function subscribe() {
  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Changed";
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
}
//we can convert string into no. and no. into string into number
// for string to number
let set = "7";
console.log(typeof set);
set = Number(set);
console.log(typeof set);
//for number to string
let get = 7;
console.log(typeof get);
get = String(7);
console.log(typeof get);
console.log("25" - 5); //In subtraction it converts string into number.
console.log("25" + 5); //In addition it converts number into string.
