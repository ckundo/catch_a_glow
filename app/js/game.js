var WAM = (function(my) {
  var my = my;

  var game = function() {
    var self = {};
    var myMoles, myScoreboard;
    var gameTimeLimit = 10000;

    var moles = function() {
      var moleNodes = document.querySelectorAll('[data-mole]');
      myMoles = [];

      Array.prototype.slice.call(moleNodes).map(function (node) {
        myMoles.push(WAM.mole(node));
      });
    };

    var whacked = function() {
      myScoreboard.bump();
      this.toggle();
    };

    var assignMoles = function() {
      moles();
      myMoles.map(function(myMole) {
        myMole.onclick = whacked;
        myMole.reset();
      });
    };

    var start = function() {
      setTimeout(function() {
        end();
      }, gameTimeLimit);

      myScoreboard = my.scoreboard;
      myScoreboard.reset();
      assignMoles();
    };

    var end = function() {
      var board = document.querySelector('[data-mole]').parentNode;
      var message = document.querySelector('[data-message]');
      var score = document.createElement('span');
      score.textContent = myScoreboard.score === 0 ? 'O_o' : ':D';
      board.parentNode.replaceChild(message, board);
      message.appendChild(score);
      message.style.display = 'block';
    };

    self.start = start;
    return self;
  }();

  my.game = game;
  return my;
})(WAM || {});
