let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreText = document.querySelector("#user-score");
const compScoreText = document.querySelector("#computer-score");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreText.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScoreText.innerText = computerScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
      const CChoice = GenerateCompChoice();
      if (userChoice === CChoice) {
        gameDraw();
      } 
      else 
      {
          let userWin = true;
          if (userChoice === "rock")
          {
            userWin = CChoice === "paper" ? false : true;
          } 
          else if (userChoice === "paper") {
            userWin = CChoice === "scissors" ? false : true;
          } else {
            userWin = CChoice === "rock" ? false : true;
          }
          showWinner(userWin, userChoice, CChoice);
      }
};

const gameDraw = () => {
  msg.innerText = "Game was Draw! Play again.";
  msg.style.backgroundColor = "gray";
};

const GenerateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
