describe('mole', function() {
  var button, myMole;

  beforeEach(function() {
    button = document.createElement('button');
    myMole = mole(button);

    scoreboard = document.createElement('input');
    scoreboard.setAttribute('name', 'score');
    document.body.appendChild(scoreboard);
  });

  describe('getting whacked (clicked)', function() {
    it('disables itself', function() {
      myMole.onclick();
      expect(myMole.disabled).toBeTruthy();
    });

    describe('after a delay', function() {
      beforeEach(function() {
        jasmine.clock().install();
      });

      afterEach(function() {
        jasmine.clock().uninstall();
      });

      it('reenables itself', function() {
        myMole.click();
        jasmine.clock().tick(10001);
        expect(myMole.disabled).toBeFalsy();
      });
    })
  });
});
