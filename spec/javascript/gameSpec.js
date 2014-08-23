describe('game', function() {
  var myGame;

  beforeEach(function() {
    myGame = game();
  });

  describe('.start', function() {
    it('resets the score', function() {
      myGame.bumpScore();
      myGame.start();
      expect(myGame.score).toEqual(0);
    });
  });

  describe('.bumpScore', function() {
    it('increments the score', function() {
      expect(myGame.score).toEqual(0);
      myGame.bumpScore();
      expect(myGame.score).toEqual(100);
    });
  });
});
