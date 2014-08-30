var scoreboard = function() {
  var self = {};
  var score = 0;
  var increment = 1;
  var element = document.querySelector('[name=score]');

  var bump = function() {
    score += increment;
    element.value = score;
    self.score = score
  };

  var reset = function() {
    score = 0;
    element.value = score;
    self.score = score;
  };

  element.value = score;

  self.score = score;
  self.bump = bump;
  self.reset = reset;
  return self;
};