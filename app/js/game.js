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
      myMoles.map(function(myMole) {
        document.body.removeChild(myMole);
      });

      var message = document.createTextNode('You whacked ' + myScoreboard.score + ' moles!');
      document.body.appendChild(message);
    };

    self.start = start;
    return self;
  }();

  my.game = game;
  return my;
})(WAM || {});
