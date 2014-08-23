var game = function() {
  var self, score, moles;

  self = {};
  score = 0;
  moles = [];

  var start = function() {
    self.score = 0;
    moles = document.querySelectorAll('[data-mole]');

    Array.prototype.slice.call(moles).map(function(mole) {
      mole.onclick = function () {
        bumpScore();
      };
    });

    self.moles = moles;
  };

  var bumpScore = function() {
    self.score += 100;
  };

  self.bumpScore = bumpScore;
  self.start = start;
  self.score = score;
  self.moles = moles;
  return self;
};
