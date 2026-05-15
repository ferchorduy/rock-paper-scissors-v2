// Variables and constants
const nameInput = document.getElementById('name-input');
const playButton = document.getElementById('play-button');
const nameInputContainer = document.querySelector('.game__user-name')
const introPage = document.querySelector('.intro');
const gamePage = document.querySelector('.game');



//Generate a function where clanker chooses between rock, paper, scissors
const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

// Function to allow enter key to enter game after name typed
nameInput.addEventListener('keypress', e => e.key === 'Enter' && playButton.click());

// Function to add nameInput to the UI and enter gamePage
playButton.addEventListener('click', () => {
  gamePage.classList.remove('hidden');
  introPage.classList.add('hidden');
  nameInputContainer.textContent = String(nameInput.value) || ('you');
});

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