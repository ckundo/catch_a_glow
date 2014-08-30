var mole = function(element) {
  var self = element;
  var hidden = true;
  var maxHideDelayMillis = 10000;
  var maxEmergeDelayMillis = 5000;

  var toggle = function() {
    self.disabled = !self.disabled;
    setDelayedTimeout();
  };

  var setDelayedTimeout = function(direction) {
    var maxDelay = hidden ? maxHideDelayMillis : maxEmergeDelayMillis;
    setTimeout(toggle, Math.random() * maxDelay);
  };

  var reset = function() {
    self.disabled = false;
    toggle();
  };

  self.toggle = toggle;
  self.reset = reset;
  return self;
};
