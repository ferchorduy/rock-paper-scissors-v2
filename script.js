//Generate a function that randomly shows one of the three choices between rock, paper, scissors
                            
const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

//Generate a function that a user can input their choice in a prompt

const getHumanChoice = () => prompt('Choose between rock, paper, scissors.').toLowerCase();

//Generate a function that plays a round, sends a message showing the choices, and incrementing the score of the winner of the round

const playGame = () => {
  
  //score variables

  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log(`Tie! ${humanChoice} is the same as ${computerChoice}. Score: ${humanScore} - ${computerScore}`);
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
      humanScore++
      console.log(`You picked ${humanChoice}, beating bot's ${computerChoice}. Score: ${humanScore} - ${computerScore}`);
    } else {
      computerScore++
      console.log(`You picked ${humanChoice}, losing to bot's ${computerChoice}. Score: ${humanScore} - ${computerScore}`);
    }
  };

  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! ${humanScore} to ${computerScore}`);
  } else {
    console.log(`Tie! ${humanScore} to ${computerScore}`);
  }

}

playGame();