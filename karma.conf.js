var karmaConfig = {
  basePath: '.',
  frameworks: ['systemjs', 'jasmine'],
  systemjs: {
    // Path to your SystemJS configuration file
    configFile: 'app/config.js',

    // Files to be included before all others
    includeFiles: [
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/angular2/bundles/angular2-polyfills.js'
    ],

    config: {
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
    { pattern: 'node_modules/angular2/*.js', included: false, watched: false },
    { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/rxjs/*.js', included: false, watched: false },
    { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/ui-router-ng2/*.js', included: false, watched: false },
    { pattern: 'node_modules/ui-router-ng2/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/*/*.json', included: false, watched: false }
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