
describe('Numbers app', function() {
  
  describe('Scenario 1', function() {
    var page;
    it('Loads the app', function() {
      page = new NumbersPageObject();
      page.get();

      expect(page.list().count()).toBe(1);
    });
  });
});