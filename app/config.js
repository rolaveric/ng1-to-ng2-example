System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  packageConfigPaths: ['node_modules/*/package.json'],
  map: {
    // SystemJS and plugins
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    'text': 'node_modules/systemjs-plugin-text/text.js',

    // App libraries
    'angular': 'node_modules/angular',
    'angular-ui-bootstrap': 'node_modules/angular-ui-bootstrap',
    'angular-ui-router': 'node_modules/angular-ui-router/commonjs'
  },
  transpiler: 'plugin-babel',
  packages: {
    'app': {
      defaultExtension: false
    },
    'angular': {
      main: 'index.js'
    },
    'angular-ui-router': {},
    'angular-ui-bootstrap': {
      main: 'index.js'
    }
  }
});