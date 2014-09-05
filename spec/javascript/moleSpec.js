describe('mole', function() {
  var button, scoreboard;

  beforeEach(function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.body.appendChild(button);

    scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.body.appendChild(scoreboard);

    introMessage = document.createElement('h2');
    introMessage.setAttribute('data-message', 'start');
    document.children[0].appendChild(introMessage);

    endMessage = document.createElement('h2');
    endMessage.setAttribute('data-message', 'end');
    document.children[0].appendChild(endMessage);

    WAM.game.start();
  });

  describe('getting whacked (clicked)', function() {
    it('splats', function() {
      button.disabled = false;
      button.click();
      expect(button.disabled).toBeTruthy();
    });
  });
});
