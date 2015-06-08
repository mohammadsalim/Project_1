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
      // checkValue();
      // checkWin();
      playerTurn = 1;
    } else {
      $(this).text(playerO);
      $(this).off('click');
      // checkValue();
      // checkWin();
      playerTurn = 0;
    }
  });
};

$(document).ready(function() {
  newGame();
  setName();
}); //Used to start the newGame function//

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
//X
checkWin = function() {
  if ((a1 === a2 && a1 === a3 && (a1 = "x")) ||
  (b1 === b2 && b1 === b3 && (b1 = "x")) ||
  (c1 === c2 && c1 === c3 && (c1 = "x")) ||
  (a1 === b1 && a1 === c1 && (a1 = "x")) ||
  (a2 === b2 && a2 === c2 && (a2 = "x")) ||
  (a3 === b3 && a3 === c3 && (a3 = "x"))))
};

//O
