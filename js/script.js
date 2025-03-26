function Gameboard() {
  const totalSquares = 9;
  const board = [];

  for (let i = 0; i < totalSquares; i++) {
    board.push(0);
  };

  const printBoard = () => console.log(board);

  const gameboard = () => board;

  function placeMarker(square, playerMark) {
    board[square] == 0 ? board[square] = playerMark:console.log(`That spot is not available.`)
  }

  return { printBoard, placeMarker, gameboard }
};

function Player(name, marker) {
  const playerName = () => name;
  const playerMark = () => marker;

  return { playerName, playerMark }
};

function GameController(playerOneName = "Player One", playerTwoName = "Player Two") {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      mark: 1
    },
    {
      name: playerTwoName,
      mark: -1
    }
  ]

  let activePlayer = players[0];

  function switchActivePlayer() {
    activePlayer = activePlayer === players[0] ? players[1]: players[0]
  }

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`)
  }

  const playRound = (square) => {
    board.placeMarker(square, getActivePlayer().mark);
    evaluateForWinner(board.gameboard);
    switchActivePlayer();
    printNewRound();
  };

  function evaluateForWinner(board) {
    let gameWon = false;
    
    const winningLines = [
      [0, 1, 2], //top row
      [3, 4, 5], //middle row
      [6, 7, 8], //bottom row
      [0, 3, 6], //left colum
      [1, 4, 7], //middle column
      [2, 5, 8], //right column
      [0, 4, 8], //diagonal1
      [2, 4, 6], //diagonal2
    ]

    for (let i = 0; i < winningLines.length; i++) {
      const condition = winningLines[i];
      const squareOne = board[condition[0]];
      const squareTwo = board[condition[1]];
      const squareThree = board[condition[2]]
      
      if (squareOne == 0 || squareTwo == 0 || squareThree == 0) {
        continue;
      } else if (squareOne === squareTwo && squareTwo === squareThree) {
        gameWon = true;
        break;
      }
    }
    if (gameWon) {
      console.log(`${getActivePlayer().name} wins!`);
    }
  }

  printNewRound();
  
  return { playRound, getActivePlayer }; 
};

const game = GameController();