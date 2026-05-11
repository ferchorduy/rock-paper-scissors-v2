//Generate a function that randomly shows one of the three choices between rock, paper, scissors

// function getComputerChoice() {
//   const choices = ['rock', 'paper', 'scissors'];
//   const choice = Math.floor(Math.random() * 3);
//   return choices[choice];
// };

//                                return        choices                      [choice];
const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

//using Claude to learn how to write concise code. Here: inlining. i didn't see it, but my return in
//my getComputerChoice() are literally two variables. just replace them with their values directly
//with the arrow function.

//Generate a function that a user can input their choice in a prompt

const getHumanChoice = () => prompt('Choose between rock, paper, scissors.').toLowerCase();

//Generate a function that plays a round, sends a message showing the choices, and incrementing the score of the winner of the round

// Claude's code below. 2026. Using dictionaries, objects in JS according to Claude.

// const playRound = (humanChoice, computerChoice) => {
//     const wins = {
//         rock: 'scissors',
//         paper: 'rock',
//         scissors: 'paper'
//     }

//     if (humanChoice === computerChoice) {
//         console.log(`Tie! You both picked ${humanChoice}`)
//     } else if (wins[humanChoice] === computerChoice) {
//         humanScore++
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`)
//     } else {
//         computerScore++
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
//     }
// }

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

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! ${humanScore} to ${computerScore}`);
  } else {
    console.log(`Tie! ${humanScore} to ${computerScore}`);
  }

}

playGame();