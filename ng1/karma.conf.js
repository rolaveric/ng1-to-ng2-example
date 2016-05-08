var karmaConfig = {
  basePath: '../',
  frameworks: ['systemjs', 'jasmine'],
  systemjs: {
    // Path to your SystemJS configuration file
    configFile: 'app/config.js',

    // SystemJS configuration specifically for tests, added after your config file.
    // Good for adding test libraries and mock modules
    config: {
      paths: {
        'angular-mocks': 'node_modules/angular-mocks/angular-mocks.js'
      },
      map: {
        'app': 'base/app'
      }
    }
  },
  // Test files
  files: [
    'app/*.spec.js',
    'app/**/*.spec.js',
    { pattern: 'app/!(*spec).js', included: false },
    { pattern: 'app/**/!(*spec).js', included: false },
    { pattern: 'app/*.html', included: false },
    { pattern: 'app/**/*.html', included: false },
    { pattern: 'node_modules/systemjs-plugin-babel/*.js', included: false, watched: false },
    { pattern: 'node_modules/systemjs-plugin-babel/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/systemjs-plugin-text/text.js', included: false, watched: false },
    { pattern: 'node_modules/angular/*.js', included: false, watched: false },
    { pattern: 'node_modules/angular-mocks/*.js', included: false, watched: false },
    { pattern: 'node_modules/angular-ui-bootstrap/index.js', included: false, watched: false },
    { pattern: 'node_modules/angular-ui-bootstrap/dist/*.js', included: false, watched: false },
    { pattern: 'node_modules/angular-ui-router/commonjs/*.js', included: false, watched: false },
    { pattern: 'node_modules/angular-ui-router/commonjs/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/*/package.json', included: false, watched: false }
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
  karmaConfig.singleRun = true;
}

module.exports = function(config) {
  config.set(karmaConfig);
};