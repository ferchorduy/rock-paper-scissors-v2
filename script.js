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
const getComputerChoiceClaude = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

//using Claude to learn how to write concise code. Here: inlining. i didn't see it, but my return in
//my getComputerChoice() are literally two variables. just replace them with their values directly
//with the arrow function.

//Generate a function that a user can input their choice in a prompt

const getHumanChoice = () => prompt('Choose between rock, paper, scissors.').toLowerCase();

const playRound = (getHumanChoice, getComputerChoice) => {
  if (getHumanChoice === getComputerChoice) {
    console.log(`Tie! ${getHumanChoice} is the same as ${getComputerChoice}`);
  } else {
    console.log(`You picked ${getHumanChoice}, the bot picked ${getComputerChoice}`);
  }
};

playRound(getHumanChoice(), getComputerChoice());