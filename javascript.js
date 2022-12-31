// Object for actual gameboard
const gameBoard = (function() {
  const gameBoardSpaces = ["X","","","","","","","",""];
  const listOfIDs = ["zero","one","two","three","four","five","six",
  "seven","eight"];
  for (let i = 0; i < gameBoardSpaces.length; i++) {
    const div = document.createElement('div');
    const board = document.querySelector('.gameboard');
    board.appendChild(div);
    div.classList.add('cell');
    div.classList.add('gameLetter');
    const divID = listOfIDs[i];
    div.setAttribute('id', divID)
    const marker = gameBoardSpaces[i];
    div.textContent = marker;
  }
})();

// Creation of players
const Player = (playerName, playerMarker) => {
  return {playerName, playerMarker};
};
const playerOne = Player("one", 'X');
const playerTwo = Player("two", 'O');

// Playing the game
const playGame = (function() {
  const cellZero = document.querySelector('#zero');
  const cellOne = document.querySelector('#one');
  const cellTwo = document.querySelector('#two');
  const cellThree = document.querySelector('#three');
  const cellFour = document.querySelector('#four');
  const cellFive = document.querySelector('#five');
  const cellSix = document.querySelector('#six');
  const cellSeven = document.querySelector('#seven');
  const cellEight = document.querySelector('#eight');
  
  cellZero.addEventListener('click', (event) => {
    console.log("Test");
    gameBoard.gameBoardSpaces[0] = "X";
    
  });
})();