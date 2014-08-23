describe('game', function() {
  var myGame, button;

  beforeEach(function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.body.appendChild(button);
    myGame = game();
  });

  afterEach(function() {
    document.body.removeChild(button);
  });

  describe('starting', function() {
    it('resets the score', function() {
      myGame.bumpScore();
      myGame.start();
      expect(myGame.score).toEqual(0);
    });

    it('sets up moles', function() {
      myGame.start();
      expect(myGame.moles).toBeDefined();
      expect(myGame.moles[0]).toEqual(button);
    });
  });

  describe('whacking a mole', function() {
    it('increments the score', function() {
      myGame.start();
      expect(myGame.score).toEqual(0);
      button.click();
      expect(myGame.score).toEqual(100);
    });
  });
});
