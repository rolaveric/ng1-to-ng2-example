module.exports = function(config) {
  config.set({
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
      'app/model/login.js': ['systemjs', 'coverage']
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      { pattern: 'app/*.js', included: false },
      { pattern: 'app/**/*.js', included: false },
      { pattern: 'app/*.html', included: false },
      { pattern: 'app/**/*.html', included: false },
      { pattern: 'node_modules/*/*.json', included: false },
      { pattern: 'node_modules/systemjs-plugin-babel/*.js', included: false },
      { pattern: 'node_modules/systemjs-plugin-babel/**/*.js', included: false },
      { pattern: 'node_modules/systemjs-plugin-text/text.js', included: false },
      { pattern: 'node_modules/angular2/*.js', included: false },
      { pattern: 'node_modules/angular2/**/*.js', included: false },
      { pattern: 'node_modules/rxjs/*.js', included: false },
      { pattern: 'node_modules/rxjs/**/*.js', included: false },
      { pattern: 'node_modules/ui-router-ng2/*.js', included: false },
      { pattern: 'node_modules/ui-router-ng2/**/*.js', included: false }
    ],

    browsers: ['Chrome'],

    reporters: ['progress', 'systemjs-remap-coverage', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};