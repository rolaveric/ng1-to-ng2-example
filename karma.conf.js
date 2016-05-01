var karmaConfig = {
  basePath: '',
  frameworks: ['systemjs', 'jasmine'],

  systemjs: {
    baseURL: '.',
    systemPath: 'node_modules/systemjs/dist/system.src.js',
    configFiles: ['app/config.js'],
    imports: ['app/model/login.spec.js'],
    config: {}
  },

  preprocessors: {
    'app/index.js': ['systemjs', 'coverage'],
    'app/states.js': ['systemjs', 'coverage'],
    'app/*/!(*spec).js': ['systemjs', 'coverage']
  },

  // list of files / patterns to load in the browser
  files: [
    { pattern: 'node_modules/es6-shim/es6-shim.min.js', watched: false },
    { pattern: 'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js', watched: false },
    { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', watched: false },
    { pattern: 'app/*.js', included: false },
    { pattern: 'app/**/*.js', included: false },
    { pattern: 'app/*.html', included: false },
    { pattern: 'app/**/*.html', included: false },
    { pattern: 'node_modules/*/*.json', included: false, watched: false },
    { pattern: 'node_modules/systemjs-plugin-babel/*.js', included: false, watched: false },
    { pattern: 'node_modules/systemjs-plugin-babel/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/systemjs-plugin-text/text.js', included: false, watched: false },
    { pattern: 'node_modules/angular2/*.js', included: false, watched: false },
    { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/rxjs/*.js', included: false, watched: false },
    { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
    { pattern: 'node_modules/ui-router-ng2/*.js', included: false, watched: false },
    { pattern: 'node_modules/ui-router-ng2/**/*.js', included: false, watched: false }
  ],

  browsers: ['Chrome'],

  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },

  reporters: ['progress', 'systemjs-remap-coverage', 'coverage'],

  coverageReporter: {
    dir : 'coverage/',
    reporters: [
      {type: 'html'},
      {type: 'json'}
    ]
  }
};

if (process.env.TRAVIS) {
  karmaConfig.browsers = ['Chrome_travis_ci'];
}

module.exports = function(config) {
  config.set(karmaConfig);
};