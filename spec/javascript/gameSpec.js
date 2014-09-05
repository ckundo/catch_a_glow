describe('game', function() {
  var myGame, button, jar, scoreboard, tally, mark, introMessage, endMessage;

  var setFixtures = function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.body.appendChild(button);

    introMessage = document.createElement('h2');
    introMessage.setAttribute('data-message', 'start');
    document.body.appendChild(introMessage);

    endMessage = document.createElement('h2');
    endMessage.setAttribute('data-message', 'end');
    document.body.appendChild(endMessage);

    scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.body.appendChild(scoreboard);

    tally = document.createElement('div');
    tally.setAttribute('class', 'tally');

    mark = document.createElement('span');
    mark.setAttribute('data-mark', true);

    jar = document.createElement('div');
    jar.setAttribute('data-jar', true);
    document.body.appendChild(jar);
    jar.appendChild(tally);
    jar.appendChild(mark);
  }

  beforeEach(function() {
    setFixtures();
    myGame = WAM.game;
  });

  it('assigns a scoreboard', function() {
    myGame.start();
    expect(scoreboard.value).toEqual('0');
  });

  it('shows a message', function() {
    myGame.start();
    expect(document.querySelector("[data-message='start']").style.display).toEqual('inline-block');
  });

  describe('whacking a mole', function() {
    it('increments the score', function() {
      myGame.start();
      button.disabled = false;
      button.click();
      expect(WAM.scoreboard.score).toEqual(1);
    });
  });

  describe('ending the game', function() {
    it('displays the jar with a tally', function() {
      myGame.start();

      button.disabled = false;
      button.click();
      button.disabled = false;
      button.click();
      myGame.end();

      expect(tally.style.display).not.toEqual('inline-block');
      expect(document.querySelector('[data-jar]').style.display).toEqual('block');
      expect(document.querySelectorAll('.tally [data-mark]').length).toEqual(2);
    });
  });
});
