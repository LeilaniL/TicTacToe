var gameGrid = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

function isGameOver() {
  for (var x = 0; x < 3; x++) {
    if(gameGrid[x][0] == gameGrid[x][1] && gameGrid[x][1] == gameGrid[x][2] && gameGrid[x][0] != " ") {
      if (turnIndicator % 2 === 0) {
        alert("Player 'O' wins!");
      }
      else {
        alert("Player 'X' wins!");
      }
    }
    if(gameGrid[0][x] == gameGrid[1][x] && gameGrid[1][x] == gameGrid[2][x] && gameGrid[0][x] != " ") {
      if (turnIndicator % 2 === 0) {
        alert("Player 'O' wins!");
      }
      else {
        alert("Player 'X' wins!");
      }
    }
  }
  if (gameGrid[0][0] == gameGrid[1][1] && gameGrid[1][1] == gameGrid[2][2] && gameGrid[0][0] != " ") {
    if (turnIndicator % 2 === 0) {
      alert("Player 'O' wins!");
    }
    else {
      alert("Player 'X' wins!");
    }
  }
  if (gameGrid[0][2] == gameGrid[1][1] && gameGrid[1][1] == gameGrid[2][0] && gameGrid[0][2] != " ") {
    if (turnIndicator % 2 === 0) {
      alert("Player 'O' wins!");
    }
    else {
      alert("Player 'X' wins!");
    }
  }
}


  



var turnIndicator = 0;

$(document).ready(function() {
 
  
  $(".col").click(function() {
    var i = $(this).data("i");
    var j = $(this).data("j");
    if (turnIndicator % 2 === 0 && gameGrid[i][j] == " ") {
      gameGrid[i][j] = "X";
      turnIndicator++;
      $(this).html("X");
      // alert("hi");
      // debugger;
      isGameOver();
      
    }
    else if (turnIndicator % 2 !== 0 && gameGrid[i][j] == " ") {
      gameGrid[i][j] = "O";
      turnIndicator++;
      $(this).text("O");
      isGameOver();
    }
  });
  $("button").click(function(){
      location.reload();
  });
})