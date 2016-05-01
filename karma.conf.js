var karmaConfig = {
  basePath: '.',
  frameworks: ['systemjs', 'jasmine'],
  systemjs: {
    // Path to your SystemJS configuration file
    configFile: 'app/config.js',

    // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
    serveFiles: [
      'app/!(*spec).js',
      'app/**/!(*spec).js',
      'app/*.html',
      'app/**/*.html',
      'node_modules/systemjs-plugin-babel/*.js',
      'node_modules/systemjs-plugin-babel/**/*.js',
      'node_modules/systemjs-plugin-text/text.js',
      'node_modules/angular/*.js',
      'node_modules/angular-mocks/*.js',
      'node_modules/angular-ui-bootstrap/index.js',
      'node_modules/angular-ui-bootstrap/dist/*.js',
      'node_modules/angular-ui-router/commonjs/*.js',
      'node_modules/angular-ui-router/commonjs/**/*.js'
    ],

    // SystemJS configuration specifically for tests, added after your config file.
    // Good for adding test libraries and mock modules
    config: {
      paths: {
        'angular-mocks': 'node_modules/angular-mocks/angular-mocks.js'
      }
    }
  },
  // Test files
  files: [
    'app/*.spec.js',
    'app/**/*.spec.js'
  ],

  browsers: ['Chrome'],

  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  }
};

if (process.env.TRAVIS) {
  karmaConfig.browsers = ['Chrome_travis_ci'];
}

module.exports = function(config) {
  config.set(karmaConfig);
};