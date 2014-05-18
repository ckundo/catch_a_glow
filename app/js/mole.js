var mole = function(spec) {
  var that = spec.element;
  var myGame = spec.theGame;
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
    myGame.bumpScore();
    reset();
  };

  return that;
};
