function Gameboard() {
  const totalSquares = 9;
  const board = [];

  for (let i = 0; i < totalSquares; i++) {
    board.push(0);
  };

  const printBoard = () => console.log(board);

  function placeMarker(square, playerMark) {
    board[square] == 0 ? board[square] = playerMark : console.log(`That spot is not available.`)
    console.log(`Square: ${square}, playerMark: ${playerMark}`)
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
      mark: 1,
      symbol: "X",
    },
    {
      name: playerTwoName,
      mark: -1,
      symbol: "O",
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
  
  return { playRound, getActivePlayer, activePlayer }; 
};

function GameDisplay() {
  const game = GameController();
  
  document.addEventListener("click", e => {
    if (e.target.matches(".square")) {
      const newSpan = document.createElement("span");
      const indexNumber = parseInt(e.target.dataset.indexnumber);
      const playerMarker = game.getActivePlayer().symbol
      const span = document.querySelector("span");

      if (!e.target.contains(span)) {
        game.playRound(indexNumber);
        e.target.append(newSpan);
        newSpan.classList.add("playerMark")
        newSpan.innerHTML = playerMarker;
        // console.log(`Index Number: ${indexNumber}`);
        // console.log(`Active Player Marker: ${playerMarker}`)
      }

      
    }
  })

}

const game = GameController();
const display = GameDisplay();