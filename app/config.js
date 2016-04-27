System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  packageConfigPaths: ['node_modules/*/package.json'],
  map: {
    // SystemJS and plugins
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    'text': 'node_modules/systemjs-plugin-text/text.js'
  },
  paths: {
    'app/*': 'app/*',
    'angular2/*': 'node_modules/angular2/*',
    'rxjs/*': 'node_modules/rxjs/*'
  },
  transpiler: 'plugin-babel',
  packages: {
    'app': {
      defaultExtension: false
    },
    'ui-router-ng2': {
      main: 'ng2.js'
    }
  }
});