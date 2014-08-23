var mole = function(element) {
  var self = element;

  var hide = function() {
    self.disabled = true;
  };
  var emerge = function() {
    self.disabled = false;
  };

  var reset = function() {
    hide();
    setTimeout(emerge, Math.random() * 10000);
  };

  self.onclick = function() {
    reset();
  };

  return self;
};
