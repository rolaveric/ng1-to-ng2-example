module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['systemjs', 'jasmine'],

    systemjs: {
      systemPath: 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
      configFiles: ['app/config.js'],
      imports: ['app/**/*.spec.js'],
      config: {}
    },

    preprocessors: {
      'app/model/login.js': ['systemjs']
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

    browsers: ['Chrome']
  });
};