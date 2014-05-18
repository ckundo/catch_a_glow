var game = function(spec) {
  var that = {};
  var score = 0;

  that.bumpScore = function() {
    that.score += 100;
  };

  that.score = score;

  return that;
};
