var WAM = (function(my) {
  var my = my;

  var game = function() {
    var self = {};
    var myMoles, myScoreboard;
    var gameTimeLimit = 15000;

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

    var toggleMessage = function(message, state) {
      var node = document.querySelector('[data-message="' + message + '"]');
      node.style.display = state == "hidden" ? "none" : "inline-block";
    };

    var start = function() {
      setTimeout(function() {
        end();
      }, gameTimeLimit);

      toggleMessage('start');
      myScoreboard = my.scoreboard;
      myScoreboard.reset();
      assignMoles();
    };

    var end = function() {
      var board = document.querySelector('[data-mole]').parentNode;
      var jar = document.querySelector('[data-jar]');
      var message = document.querySelector('[data-message]');
      var score = document.createElement('span');

      var bullet = String.fromCharCode('11044') + " ";
      for(var i=0; i < myScoreboard.score; i++) {
        score.textContent += bullet;
      }

      toggleMessage('start', 'hidden');
      toggleMessage('end');
      board.parentNode.replaceChild(jar, board);
      jar.appendChild(score);
      jar.style.display = 'block';
      message.style.display = 'inline-block';
      toggleMessage('start', 'hidden');
      toggleMessage('end');
    };

    self.start = start;
    self.end = end;
    return self;
  }();

  my.game = game;
  return my;
})(WAM || {});
