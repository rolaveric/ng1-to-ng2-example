'use strict';
const NumbersPageObject = require('./pageobject.js').NumbersPageObject;

describe('Numbers app', function() {
  
  describe('Scenario 1', function() {
    var page;
    it('Loads the app', function() {
      page = new NumbersPageObject();
      page.get();

      expect(page.list().isPresent()).toBe(true);
    });
  });
});