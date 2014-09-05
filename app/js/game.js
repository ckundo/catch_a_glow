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

    var start = function() {
      setTimeout(function() {
        end();
      }, gameTimeLimit);

      document.querySelector('[data-message-start]').style.display = 'inline';
      myScoreboard = my.scoreboard;
      myScoreboard.reset();
      assignMoles();
    };

    var end = function() {
      var board = document.querySelector('[data-mole]').parentNode;
      var jar = document.querySelector('[data-jar]');
      var message = document.querySelector('[data-message]');
      var bullet = document.querySelector('[data-mark]');
      var tally = document.querySelector('.tally');
      var marks = [];

      for(var i=0; i < myScoreboard.score; i++) {
        var copy = bullet.cloneNode();
        tally.appendChild(copy);
        marks.push(copy);
      }

      document.querySelector('[data-message-start]').style.display = 'none';
      document.querySelector('[data-message-end]').style.display = 'inline';
      board.parentNode.replaceChild(jar, board);
      jar.style.display = 'block';
      message.style.display = 'inline-block';
      message.style.display = 'inline-block';
      tally.style.display = 'inline-block';
    };

    self.start = start;
    self.end = end;
    return self;
  }();

  my.game = game;
  return my;
})(WAM || {});
