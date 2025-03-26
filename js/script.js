function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(0);
    };
  };

  const printBoard = () => console.log(board);

  const gameboard = () => board;

  function placeMarker(row, column, playerMark) {
    board[row][column] == 0 ? board[row][column] = playerMark:console.log(`That spot is not available.`)
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
      mark: 2
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

  const playRound = (row, column) => {
    board.placeMarker(row, column, getActivePlayer().mark);
    evaluateForWinner(board.gameboard);
    switchActivePlayer();
    printNewRound();
  };

  function evaluateForWinner(board) {
    let gameWon = false;
    
    const winningLines = [
      [board[0][0], board[0][1], board[0][2]], //top row
      [board[1][0], board[1][1], board[1][2]], //middle row
      [board[2][0], board[2][1], board[2][2]], //bottom row
      [board[0][0], board[1][0], board[2][0]], //left colum
      [board[0][1], board[1][1], board[2][1]], //middle column
      [board[0][2], board[1][2], board[2][2]], //right column
      [board[0][0], board[1][1], board[2][2]], //diagonal1
      [board[0][2], board[1][1], board[2][0]], //diagonal2
    ]

    for (let i = 0; i < winningLines.length; i++) {
      const condition = winningLines[i];
      const squareOne = board[condition[0]];
      const squareTwo = board[condition[1]];
      const squareThree = board[condition[2]]
      
      if (squareOne == 0 || squareTwo == 0 || squareThree == 0) {
        continue;
      }

      if (squareOne === squareTwo && squareTwo === squareThree) {
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