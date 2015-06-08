//Player Variables//
var playerX = 'x';
var playerO = 'o';
var playerTurn = 0;

//Game Variables//
var checkValue;
//Row A cell values//
var a1;
var a2;
var a3;
//Row B cell values//
var b1;
var b2;
var b3;
//Row C cell values//
var c1;
var c2;
var c3;

//Game Winner Variables//
var checkWin;
var xWin;
var oWin;

//Game Variables//
var newGame;
var boardRestart;

//X or O placed in cells when selected//
var newGame = function() {
  $('td').on('click', function(event) {
    if (playerTurn == 0) {
      $(this).text(playerX);
      checkValue();
      checkWin();
      playerTurn = 1;
    } else {
      $(this).text(playerO);
      checkValue();
      checkWin();
      playerTurn = 0;
    }
  });
};

$(document).ready(function() {
  newGame();
}); //Used to start the newGame function//
