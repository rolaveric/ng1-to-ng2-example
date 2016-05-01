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

    // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
    serveFiles: [
      'app/!(*spec).js',
      'app/**/!(*spec).js',
      'app/*.html',
      'app/**/*.html',
      'node_modules/systemjs-plugin-babel/*.js',
      'node_modules/systemjs-plugin-babel/**/*.js',
      'node_modules/systemjs-plugin-text/text.js',
      'node_modules/angular2/*.js',
      'node_modules/angular2/**/*.js',
      'node_modules/rxjs/*.js',
      'node_modules/rxjs/**/*.js',
      'node_modules/ui-router-ng2/*.js',
      'node_modules/ui-router-ng2/**/*.js'
    ]
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