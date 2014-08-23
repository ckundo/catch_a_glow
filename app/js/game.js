var game = function() {
  var self, score, moles;
  self = {};
  score = 0;
  moles = [];

  var start = function() {
    self.score = 0;
    self.moles = document.querySelectorAll('[data-mole]');
    updateScoreboard();
    assignMoles();
  };

  var bumpScore = function() {
    self.score += 100;
    updateScoreboard();
  };

  var updateScoreboard = function() {
    var scoreboard = document.querySelector('[name=score]');
    scoreboard.value = self.score;
    self.scoreboard = scoreboard;
  };

  var assignMoles = function() {
    Array.prototype.slice.call(self.moles).map(function(mole) {
      mole.onclick = function () {
        bumpScore();
      };
    });
  };

  self.bumpScore = bumpScore;
  self.start = start;
  return self;
};
