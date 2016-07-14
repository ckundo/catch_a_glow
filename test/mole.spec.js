describe('mole', function() {
  var button, scoreboard;

  beforeEach(function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.body.appendChild(button);

    var scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.body.appendChild(scoreboard);

    var introMessage = document.createElement('h2');
    introMessage.setAttribute('data-message-start', true);
    document.body.appendChild(introMessage);

    var endMessage = document.createElement('h2');
    endMessage.setAttribute('data-message-end', true);
    document.body.appendChild(endMessage);

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
