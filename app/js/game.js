var game = function(spec) {
  var self = {};
  var score = 0;

  self.bumpScore = function() {
    self.score += 100;
  };

  self.score = score;

  return self;
};
