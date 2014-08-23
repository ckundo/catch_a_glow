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
  });
});
