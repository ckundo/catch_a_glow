describe('mole', function() {
  var myGame = game({});
  spyOn(myGame, 'bumpScore');

  var myMole = mole({
    element: { disabled: false },
    theGame: myGame
  });

  it('resets on click', function() {
    myMole.onclick();
    expect(myMole.disabled).toBeTruthy();
  });

  it('increments the score on click', function() {
    myMole.onclick();
    expect(game.bumpScore).toHaveBeenCalled();
  });
});
