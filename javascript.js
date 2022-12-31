const gameBoard = (function() {
  const cellZero = document.querySelector('#zero');
  const cellOne = document.querySelector('#one');
  const cellTwo = document.querySelector('#two');
  const cellThree = document.querySelector('#three');
  const cellFour = document.querySelector('#four');
  const cellFive = document.querySelector('#five');
  const cellSix = document.querySelector('#six');
  const cellSeven = document.querySelector('#seven');
  const cellEight = document.querySelector('#eight');
  const gameBoardSpaces = ["X","O","X","O","X","O","X","O","X"];
  for (let i = 0; i < gameBoardSpaces.length; i++) {
    const div = document.createElement('div');
    const board = document.querySelector('.gameboard');
    board.appendChild(div);
    div.classList.add('cell');
    div.classList.add('gameLetter');
    const marker = gameBoardSpaces[i];
    div.textContent = marker;
  }
})();

const Player = (playerName, playerMarker) => {
  return {playerName, playerMarker};
};

const playerOne = Player(one, 'X');
const playerTwo = Player(two, 'O');