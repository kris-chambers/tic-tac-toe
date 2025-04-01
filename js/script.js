function Gameboard() {
  const totalSquares = 9;
  const board = [];

  for (let i = 0; i < totalSquares; i++) {
    board.push(0);
  };

  const printBoard = () => console.log(board);

  function placeMarker(square, playerMark) {
    board[square] == 0 ? board[square] = playerMark:console.log(`That spot is not available.`)
  }

  return { printBoard, placeMarker, board }
};

function Player(name, marker) {
  const playerName = () => name;
  const playerMark = () => marker;

  return { playerName, playerMark }
};

function GameController(playerOneName = "Player One", playerTwoName = "Player Two") {
  const board = Gameboard();
  let gameWon = false;

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
    if (!gameWon) {
      printNewRound();
      board.placeMarker(square, getActivePlayer().mark);
      evaluateForWinner(board.board);
      switchActivePlayer();
    } else {
      board.printBoard();
      console.log(`Game Over!`)
    }
    
  };

  function evaluateForWinner(board) {
    const winningLines = [
      [0, 1, 2], //top row
      [3, 4, 5], //middle row
      [6, 7, 8], //bottom row
      [0, 3, 6], //left colum
      [1, 4, 7], //middle column
      [2, 5, 8], //right column
      [0, 4, 8], //diagonal1
      [2, 4, 6], //diagonal2
    ];

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
//        console.log(`
//          condition: ${condition},
//          squareOne: ${squareOne},
//          squareTwo: ${squareTwo},
//          squareThree: ${squareThree} 
//        `);
        console.log(`${getActivePlayer().name} wins!`);
        return gameWon;
      };

      if (!board.includes(0)) {
        gameWon = true;
        console.log("It's a tie!");
        return gameWon;
      };
    };
  };

//  printNewRound();
  
  return { playRound, getActivePlayer }; 
};

function GameDisplay() {
  const squares = document.querySelectorAll(".square");
  
  squares.forEach(square => {
    square.addEventListener("click", e => {
      const newSpan = document.createElement("span");

      
      square.append(newSpan);
      newSpan.innerHTML = "x";
    })
  })

}

const game = GameController();
const display = GameDisplay();

// tests

// player 1 wins
// game.playRound(0);
// game.playRound(8);
// game.playRound(1);
// game.playRound(6);
// game.playRound(2);
// game.playRound(0);

// tie
// game.playRound(0);
// game.playRound(2);
// game.playRound(1);
// game.playRound(3);
// game.playRound(5);
// game.playRound(4);
// game.playRound(6);
// game.playRound(8);
// game.playRound(7);