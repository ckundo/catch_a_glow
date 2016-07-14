var WAM = (function(my) {
  var my = my;

  var mole = function(element) {
    var self = element;
    var timeout = 0;
    var hidden = true;
    var maxHideDelayMillis = 10000;
    var minHideDelayMillis = 3000;
    var maxEmergeDelayMillis = 7000;
    var minEmergeDelayMillis = 500;

    var toggle = function() {
      self.disabled = !self.disabled;
      setDelayedTimeout();
    };

    var setDelayedTimeout = function(direction) {
      var maxDelay = hidden ? maxEmergeDelayMillis : maxHideDelayMillis;
      var minDelay = hidden ? minEmergeDelayMillis : minHideDelayMillis;
      clearTimeout(timeout);
      timeout = setTimeout(toggle, Math.random() * maxDelay + minDelay);
    };

    var reset = function() {
      self.disabled = false;
      toggle();
    };

    self.toggle = toggle;
    self.reset = reset;
    return self;
  };

  my.mole = mole;
  return my;
})(WAM || {});
