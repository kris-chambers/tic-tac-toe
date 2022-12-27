const cellZero = document.querySelector('#zero');
const cellOne = document.querySelector('#one');
const cellTwo = document.querySelector('#two');
const cellThree = document.querySelector('#three');
const cellFour = document.querySelector('#four');
const cellFive = document.querySelector('#five');
const cellSix = document.querySelector('#six');
const cellSeven = document.querySelector('#seven');
const cellEight = document.querySelector('#eight');

function addMarker(player, cell) {
  const div = document.createElement('div');
  cell.appendChild(div);
  div.classList.add('gameLetter');
  const marker = player.playerMarker
  div.textContent = marker;
}

const player = (playerName, playerMarker) => {
  return {playerName, playerMarker}
}

const playerOne = player('Player One', 'X');
const playerTwo = player('Player Two', 'O');

addMarker(playerOne, cellFive);