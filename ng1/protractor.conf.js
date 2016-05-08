exports.config = {
  framework: 'jasmine',
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
  specs: ['e2e/*.js']
};