var game = function() {
  var self, score;

  self = {};
  score = 0;

  var start = function() {
    self.score = 0;
  };

  var bumpScore = function() {
    self.score += 100;
  };

  self.bumpScore = bumpScore;
  self.start = start;
  self.score = score;

  return self;
};
