var game = function() {
  var self = {};

  var moles, myScoreboard;
  var gameTimeLimit = 10000;

  moles = function() {
    var moleNodes = document.querySelectorAll('[data-mole]');
    var moleArr = [];

    Array.prototype.slice.call(moleNodes).map(function (node) {
      moleArr.push(mole(node));
    });

    return moleArr;
  }();

  var whacked = function() {
    myScoreboard.bump();
    this.toggle();
  };

  var assignMoles = function() {
    moles.map(function(myMole) {
      myMole.onclick = whacked;
      myMole.reset();
    });
  };

  var start = function() {
    setTimeout(function() {
      alert('You whacked ' + myScoreboard.score + ' moles. Restarting.');
      start();
    }, gameTimeLimit);

    myScoreboard.reset();
    assignMoles();
  };

  myScoreboard = scoreboard();
  self.start = start;

  return self;
};
