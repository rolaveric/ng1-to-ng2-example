'use strict';
// Page object for the application

class NumbersPageObject {

  /**
   * loads the page into the browser
   */
  get() {
    return browser.get('http://localhost:3000/app/index.html');
  }
  
  list() {
    return $('numbers-list');
  }

  details() {
    return $('numbers-details');
  }
}

exports.NumbersPageObject = NumbersPageObject;
