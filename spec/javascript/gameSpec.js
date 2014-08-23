describe('game', function() {
  var myGame = game();

  it('has a score', function() {
    expect(myGame.score).toEqual(0);
  });

  it('increments the score', function() {
    myGame.bumpScore();
    expect(myGame.score).toEqual(100);
  });
});
