let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};
updateScoreElement();
function pickComputermove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
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
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
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
    ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer `;
    // local storage
     localStorage.setItem("score", JSON.stringify(score));
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
// document.querySelector(
//   ".js-shipping"
// ).innerHTML = `Orders under $${40} = +$${10} shipping.`;
// document.querySelector(
//   ".js-free-shipping"
// ).innerHTML = `Orders over $${40} = Free shipping.`;
// function totalCost() {
//   let inputData = document.querySelector("input").value;
//   if (inputData < 40) {
//     document.querySelector(".total-cost").innerHTML = `$${
//       Number(inputData) + 10
//     }`;
//   } else {
//     document.querySelector(".total-cost").innerHTML = `$${Number(inputData)}`;
//   }
// }
// function handleCost(event) {
//   if (event.key === "Enter") {
//     totalCost();
//   }
// }
// const buttonElement = document.querySelector(".js-subscribe-button");
// // console.log(buttonElement);
// function subscribe() {
//   if (buttonElement.innerText === "Subscribe") {
//     buttonElement.innerHTML = "Changed";
//     buttonElement.classList.add("is-Changed");
//   } else {
//     buttonElement.innerHTML = "Subscribe";
//     buttonElement.classList.remove("is-Changed");
//   }
// }
