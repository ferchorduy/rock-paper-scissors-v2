// Variables and constants
const nameInput = document.getElementById('name-input');
const playButton = document.getElementById('play-button');
const nameInputContainer = document.querySelector('.game__user-name')
const introPage = document.querySelector('.intro');
const gamePage = document.querySelector('.game');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const globalUserScore = document.querySelector('.game__user-global');
const globalClankerScore = document.querySelector('.game__clanker-global');
const userChoice = document.querySelector('.game__user-choice');
const clankerChoice = document.querySelector('.game__clanker-choice');
const userScore = document.querySelector('.game__user-score');
const clankerScore = document.querySelector('.game__clanker-score');
const gameMessage = document.querySelector('.game__message');
const ROCK = '{R}';
const PAPER = '[P]';
const SCISSORS = '\\S/';
let userScoreValue = 0;
let clankerScoreValue = 0;
let userChoiceValue = '';
let clankerChoiceValue = '';
let globalUserScoreValue = 0;
let globalClankerScoreValue = 0;
const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
const keyMap = { KeyR: 'rock', KeyP: 'paper', KeyS: 'scissors' };
const choiceValueDisplay = { rock: ROCK, paper: PAPER, scissors: SCISSORS }

// Function where clanker chooses between rock, paper, scissors
const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

// Function to allow Enter key to enter game after name typed
nameInput.addEventListener('keypress', event => event.key === 'Enter' && playButton.click());

// Function to hide introPage, add nameInput to the UI, and enter gamePage
playButton.addEventListener('click', () => {
  gamePage.classList.remove('hidden');
  introPage.classList.add('hidden');
  nameInputContainer.textContent = nameInput.value ? `(${nameInput.value})` : ('(you)');
});

// Function to play round
function playRound(event) {
  clankerChoiceValue = getComputerChoice();
  if (event.type === 'keydown') {
    userChoiceValue = keyMap[e.code]
    if (!userChoiceValue) return
  }
  if (event.type === 'click') userChoiceValue = event.target.id;
  if (userChoiceValue === clankerChoiceValue) {
    userScoreValue += 1;
    changeUI();
    gameMessage.textContent = `${userChoice.textContent} beats ${clankerChoice.textContent}. Point for you!`;
  }
  else if (wins[userChoiceValue] === clankerChoiceValue) {
    changeUI();
    gameMessage.textContent = `${userChoice.textContent} ties to ${clankerChoice.textContent}. No points!`;
  }
  else {
    clankerScoreValue += 1;
    changeUI();
    gameMessage.textContent = `${userChoice.textContent} loses to ${clankerChoice.textContent}. Point for clanker!`;
  }
};

// Function to track current round score


// Function to track global score


// Function to play game
function playGame(event) {
  playRound(event);
  if (userScoreValue === 5 || clankerChoiceValue === 5) {
    playRound = false;
    gameMessage.textContent += userScoreValue > clankerScoreValue 
    ? ' You win! Choose RPS to play again.' 
    : ' You lose! Choose RPS to play again.'
  }
};

// Function to change UI after every round played
function changeUI() {
  userScore.textContent = userScoreValue;
  clankerScore.textContent = clankerScoreValue;
  userChoice.textContent = choiceValueDisplay[userChoiceValue];
  clankerChoice.textContent = choiceValueDisplay[clankerChoiceValue];
};

// When clicking on R, P, or S, start game
rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);