describe('mole', function() {
  var button, myMole;

  beforeEach(function() {
    button = document.createElement('button');
    myMole = mole(button);
  });

  describe('getting whacked', function() {
    it('disables itself', function() {
      myMole.click();
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
