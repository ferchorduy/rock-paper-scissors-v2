//score variables

let humanScore = 0;
let computerScore = 0;

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

const playRound = (humanChoice, computerChoice) => {
  if (getHumanChoice === getComputerChoice) {
    console.log(`Tie! ${getHumanChoice} is the same as ${getComputerChoice}`);
  } else if ((getHumanChoice === 'rock' && getComputerChoice === 'scissors') ||
             (getHumanChoice === 'paper' && getComputerChoice === 'rock') ||
             (getHumanChoice === 'scissors' && getComputerChoice === 'paper')) {
    humanScore += 1;
    console.log(`You picked ${getHumanChoice}, beating bot's ${getComputerChoice}`);
  } else {
    computerScore += 1;
    console.log(`You picked ${getHumanChoice}, losing to bot's ${getComputerChoice}`);
  }
};

playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore, computerScore);