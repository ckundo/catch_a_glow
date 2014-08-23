describe('game', function() {
  var myGame, button, scoreboard;

  beforeEach(function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.body.appendChild(button);

    scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.body.appendChild(scoreboard);

    myGame = game();
  });

  afterEach(function() {
    document.body.removeChild(button);
    document.body.removeChild(scoreboard);
  });

  it('resets the score', function() {
    myGame.bumpScore();
    myGame.start();
    expect(myGame.score).toEqual(0);
  });

  it('assigns moles', function() {
    myGame.start();
    expect(myGame.moles).toBeDefined();
    expect(myGame.moles[0]).toEqual(button);
  });

  it('assigns a scoreboard', function() {
    myGame.start();
    expect(myGame.scoreboard).toEqual(scoreboard);
    expect(myGame.scoreboard.value).toEqual('0');
  });

  describe('whacking a mole', function() {
    it('increments the score', function() {
      myGame.start();
      expect(myGame.score).toEqual(0);
      button.click();
      expect(myGame.score).toEqual(100);
      expect(myGame.scoreboard.value).toEqual('100');
    });
  });
});
