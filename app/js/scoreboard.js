var WAM = (function(my) {
  var my = my;

  var scoreboard = function() {
    var self = {};
    var score = 0;
    var increment = 1;
    var element;

    var bump = function() {
      score += increment;
      element.value = score;
      self.score = score
    };

    var reset = function() {
      element = document.querySelector('[name=score]');
      score = 0;
      element.value = score;
      self.score = score;
    };

    self.score = score;
    self.bump = bump;
    self.reset = reset;
    return self;
  }();

  my.scoreboard = scoreboard;
  return my;
})(WAM || {});
