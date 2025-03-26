function pickComputermove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "sicssor";
  }
}
function playGame(playermove) {
  {
    const computerMove = pickComputermove();
    let conclusion = "";
    if (computerMove === playermove) {
      conclusion = "Tied";
    } else if (computerMove === playermove) {
      conclusion = "lost";
    } else if (computerMove === playermove) {
      conclusion = "won";
    } else {
      alert("You picked a wrong choice");
    }
    alert(
      `You picked ${playermove}. Computer picked ${computerMove}.You ${conclusion}`
    );
  }
}
