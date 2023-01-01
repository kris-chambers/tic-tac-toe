// player factory function
const createPlayer = (name, marker) => {
  return {name, marker};
};

// gameboard object
const gameBoard = (() => {
  
  // generate board array
  let board = [];
  for (i = 0; i < 9; i++) {
    board.push('');
  }

  // display square for each array item
  let squares = document.querySelector('.squares');

  board.forEach((item, index) => {
    const square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
  })

  // add event listeners on each square
  Array.from(squares.children).forEach((square, index) => {
    square.addEventListener('click', () => {
      square.classList.add()
    })
  });
})();

