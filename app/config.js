System.config({
  baseURL: '/',
  map: {
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    'angular': 'node_modules/angular',
    'angular-ui-bootstrap': 'node_modules/angular-ui-bootstrap',
    'angular-ui-router': 'node_modules/angular-ui-router/commonjs',
    'text': 'node_modules/systemjs-plugin-text/text.js'
  },
  packages: {
    'angular': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'angular-ui-router': {
      defaultExtension: 'js'
    },
    'angular-ui-bootstrap': {
      main: 'index.js',
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});