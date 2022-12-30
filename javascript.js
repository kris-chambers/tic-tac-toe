const cellZero = document.querySelector('#zero');
const cellOne = document.querySelector('#one');
const cellTwo = document.querySelector('#two');
const cellThree = document.querySelector('#three');
const cellFour = document.querySelector('#four');
const cellFive = document.querySelector('#five');
const cellSix = document.querySelector('#six');
const cellSeven = document.querySelector('#seven');
const cellEight = document.querySelector('#eight');
const gameBoardCells = [cellZero, cellOne, cellTwo, cellThree, cellFour,
   cellFive, cellSix, cellSeven, cellEight]

// Function that adds marker to gameboard when given player 
// and which cell to mark
function addMarker(player, cell) {
  const div = document.createElement('div');
  cell.appendChild(div);
  div.classList.add('gameLetter');
  const marker = player.playerMarker
  div.textContent = marker;
}

// Player creation factory function
const player = (playerName, playerMarker) => {
  return {playerName, playerMarker}
}

// Creation of players One and Two
const playerOne = player('Player One', 'X');
const playerTwo = player('Player Two', 'O');

// Function for game board
const gameBoard = (() => {
  let gameBoardCells = {
    cellZero: "",
    cellOne: "",
    cellTwo: "",
    cellThree: "",
    cellFour: "",
    cellFive: "",
    cellSix: "X",
    cellSeven: "",
    cellEight: "",
  }
  for (const cell in gameBoardCells) {
    const div = document.createElement('div');
    cell.appendChild(div);
    div.classList.add('gameLetter');
    const marker = gameBoardCells[cell];
    div.textContent = marker;
  }
})();

gameBoard();