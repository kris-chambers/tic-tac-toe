const cellZero = document.querySelector('#zero');
const cellOne = document.querySelector('#one');
const cellTwo = document.querySelector('#two');
const cellThree = document.querySelector('#three');
const cellFour = document.querySelector('#four');
const cellFive = document.querySelector('#five');
const cellSix = document.querySelector('#six');
const cellSeven = document.querySelector('#seven');
const cellEight = document.querySelector('#eight');

function addX(cell) {
  const div = document.createElement('div');
  cell.appendChild(div);
  div.classList.add('gameLetter');
  div.textContent = 'X';
}

function addO(cell) {
  const div = document.createElement('div');
  cell.appendChild(div);
  div.classList.add('gameLetter');
  div.textContent = 'O';
}

addX(cellZero);
addX(cellOne);
addO(cellTwo);
addX(cellThree);
addX(cellFour);
addO(cellFive);
addX(cellSix);
addX(cellSeven);
addO(cellEight);