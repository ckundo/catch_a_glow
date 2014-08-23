var mole = function(element) {
  var that = element;

  var hide = function() {
    that.disabled = true;
  };
  var emerge = function() {
    that.disabled = false;
  };

  var reset = function() {
    hide();
    setTimeout(emerge, Math.random() * 10000);
  };

  that.onclick = function() {
    reset();
  };

  return that;
};
