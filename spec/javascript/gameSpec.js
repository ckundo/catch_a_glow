describe('game', function() {
  var myGame, button, scoreboard;

  beforeEach(function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.body.appendChild(button);

    scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.body.appendChild(scoreboard);

    myGame = WAM.game;
  });

  afterEach(function() {
    document.body.removeChild(button);
    document.body.removeChild(scoreboard);
  });

  it('assigns a scoreboard', function() {
    myGame.start();
    expect(scoreboard.value).toEqual('0');
  });

  describe('whacking a mole', function() {
    it('increments the score', function() {
      myGame.start();
      button.disabled = false;
      button.click();
      expect(WAM.scoreboard.score).toEqual(1);
    });
  });
});
