// Variables and constants
const nameInput = document.getElementById('name-input');
const playButton = document.getElementById('play-button');
const nameInputContainer = document.querySelector('.game__user-name')
const introPage = document.querySelector('.intro');
const gamePage = document.querySelector('.game');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userGlobalScore = document.querySelector('.game__user-global-score');
const clankerGlobalScore = document.querySelector('.game__clanker-global-score');
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
let userGlobalScoreValue = 0;
let clankerGlobalScoreValue = 0;
const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
const keyMap = { KeyR: 'rock', KeyP: 'paper', KeyS: 'scissors' };
const choiceValueDisplay = { rock: ROCK, paper: PAPER, scissors: SCISSORS }
let gameOver = false;

// Function where clanker chooses between rock, paper, scissors
const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

// Function to allow Enter key to enter game after name typed
nameInput.addEventListener('keypress', event => event.key === 'Enter' && playButton.click());

// Function to hide introPage, add nameInput to the UI, and enter gamePage
playButton.addEventListener('click', () => {
  gamePage.classList.remove('hidden');
  introPage.classList.add('hidden');
  nameInputContainer.textContent = nameInput.value ? `(${nameInput.value})` : ('(you)');
  document.addEventListener('keydown', playGame);
});

// Function to play round
function playRound(event) {
  clankerChoiceValue = getComputerChoice();
  if (event.type === 'keydown') {
    userChoiceValue = keyMap[event.code];
    if (!userChoiceValue) return;
  }
  if (event.type === 'click') userChoiceValue = event.target.id;
  if (wins[userChoiceValue] === clankerChoiceValue) {
    userScoreValue += 1;
    changeUI();
    gameMessage.textContent = `${userChoice.textContent} beats ${clankerChoice.textContent}. Point for you!`;
  }
  else if (userChoiceValue === clankerChoiceValue) {
    changeUI();
    gameMessage.textContent = `${userChoice.textContent} ties to ${clankerChoice.textContent}. No points!`;
  }
  else {
    clankerScoreValue += 1;
    changeUI();
    gameMessage.textContent = `${userChoice.textContent} loses to ${clankerChoice.textContent}. Point for clanker!`;
  }
};

// Function to change global score
function changeGlobalScore() {
  if (gameOver === true) {
    if (userScoreValue === 5) {
      userGlobalScoreValue += 1;
      userGlobalScore.textContent = userGlobalScoreValue;
    } else if (clankerScoreValue === 5) {
      clankerGlobalScoreValue += 1;
      clankerGlobalScore.textContent = clankerGlobalScoreValue;
    } else return;
  }
}

// Function to play game
function playGame(event) {
  if (gameOver) {
    changeGlobalScore();
    resetGame();
    playRound(event);
    return;
  }
  playRound(event);
  if (userScoreValue === 5 || clankerScoreValue === 5) {
    gameOver = true;
    gameMessage.textContent += userScoreValue > clankerScoreValue 
    ? '\nYou win! Choose RPS to play again.' 
    : '\nYou lose! Choose RPS to play again.'
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

// Function to reset game
function resetGame() {
  gameOver = false;
  userScoreValue = 0;
  clankerScoreValue = 0;
}