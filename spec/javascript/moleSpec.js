describe('mole', function() {
  var button, scoreboard;

  beforeEach(function() {
    button = document.createElement('button');
    button.setAttribute('data-mole', true);
    document.body.appendChild(button);

    scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.body.appendChild(scoreboard);

    game().start();
  });

  afterEach(function() {
    document.body.removeChild(button);
    document.body.removeChild(scoreboard);
  });

  describe('getting whacked (clicked)', function() {
    it('splats', function() {
      button.click();
      expect(button.disabled).toBeTruthy();
    });
  });
});
