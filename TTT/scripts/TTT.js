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
var xWin = false;
var oWin = false;
var winnerIs;

//Game Variables//
var newGame;
var boardRestart;

//Initializes Game//
$(document).ready(function() {

//Player Name Values//

var setName= function(){
  $("#playerOne").on("keypress",function(event){
    var code = event.keyCode || event.which;
    if(code == 13) {
      event.preventDefault();
      var name = $(this).val();
      var $h1 = $('<h1>').text(name);
      $(this).remove();
      $('#playerName').prepend($h1);
    }
  });
  $("#playerTwo").on("keypress",function(event){
    var code = event.keyCode || event.which;
    if(code == 13) {
      event.preventDefault();
      var name = $(this).val();
      var $h1 = $('<h1>').text(name);
      $(this).remove();
      $('#playerName').append($h1);
    }
  });
};

//X or O placed in cells when selected//
var newGame = function() {
  $('td').on('click', function(event) {
    if (playerTurn == 0 ) {
      $(this).text(playerX);
      $(this).off('click');
      checkValue();
      checkWin();
      playerTurn = 1;
    } else {
      $(this).text(playerO);
      $(this).off('click');
      checkValue();
      checkWin();
      playerTurn = 0;
    }
  });
};

//Function for identifying cell value//
checkValue = function () {
  a1 = $('#a1').html();
  a2 = $('#a2').html();
  a3 = $('#a3').html();

  b1 = $('#b1').html();
  b2 = $('#b2').html();
  b3 = $('#b3').html();

  c1 = $('#c1').html();
  c2 = $('#c2').html();
  c3 = $('#c3').html();
};

//Detect Win or Tie//
checkWin = function() { //X
  if ((a1 == a2 && a1 == a3 && (a1 == "x")) ||
  (b1 == b2 && b1 == b3 && (b1 == "x")) ||
  (c1 == c2 && c1 == c3 && (c1 == "x")) ||
  (a1 == b1 && a1 == c1 && (a1 == "x")) ||
  (a2 == b2 && a2 == c2 && (a2 == "x")) ||
  (a3 == b3 && a3 == c3 && (a3 == "x")) ||
  (a1 == b2 && a1 == c3 && (a1 == "x")) ||
  (a3 == b2 && a3 == c1 && (a3 == "x"))
) {

  xWin = true;
  winnerIs();

} else { //O
  if ((a1 == a2 && a1 == a3 && (a1 == "o")) ||
  (b1 == b2 && b1 == b3 && (b1 == "o")) ||
  (c1 == c2 && c1 == c3 && (c1 == "o")) ||
  (a1 == b1 && a1 == c1 && (a1 == "o")) ||
  (a2 == b2 && a2 == c2 && (a2 == "o")) ||
  (a3 == b3 && a3 == c3 && (a3 == "o")) ||
  (a1 == b2 && a1 == c3 && (a1 == "o")) ||
  (a3 == b2 && a3 == c1 && (a3 == "o"))
) {

  oWin = true;
  winnerIs();

} else { //Tie
  if (((a1 == "x") || (a1 == "o")) &&
  ((b1 == "x") || (b1 == "o")) &&
  ((c1 == "x") || (c1 == "o")) &&
  ((a2 == "x") || (a2 == "o")) &&
  ((b2 == "x") || (b2 == "o")) &&
  ((c2 == "x") || (c2 == "o")) &&
  ((a3 == "x") || (a3 == "o")) &&
  ((b3 == "x") || (b3 == "o")) &&
  ((c3 == "x") || (c3 == "o"))
  ) {
      alert("It's a draw, start a New Game!")
    }
   }
  }
};

//Declares who the winner is//
var winnerIs = function() {
  if (xWin == true) {
    alert("Player 1 Wins! You may start a New Game!");
  } else {
    if (oWin == true) {
      alert("Player 2 Wins! You may start a New Game!");
    }
  }
};

//Starts New Game//
var boardRestart = $('#gameRestart').click(function(event) {
    a1 = $('#a1').text("");
    b1 = $('#b1').text("");
    c1 = $('#c1').text("");
    a2 = $('#a2').text("");
    b2 = $('#b2').text("");
    c2 = $('#c2').text("");
    a3 = $('#a3').text("");
    b3 = $('#b3').text("");
    c3 = $('#c3').text("");
    xWin = false;
    oWin = false;
    newGame();
});

newGame();
setName();
boardRestart();

});
