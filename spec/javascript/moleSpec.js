describe('mole', function() {
  var button, scoreboard;

  beforeEach(function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.children[0].appendChild(button);

    scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.children[0].appendChild(scoreboard);

    introMessage = document.createElement('h2');
    introMessage.setAttribute('data-message-start', true);
    document.children[0].appendChild(introMessage);

    endMessage = document.createElement('h2');
    endMessage.setAttribute('data-message-end', true);
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
