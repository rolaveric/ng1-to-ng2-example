exports.config = {
  framework: 'jasmine',
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
  specs: ['e2e/*.js'],

  /**
   * ng2 related configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true
};